import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,OnInit
} from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
} from 'date-fns';
import { Subject } from 'rxjs';

import {
  CalendarEvent,
  CalendarEventAction,
  CalendarDateFormatter,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from 'angular-calendar';
import { CustomdateformatterService } from '../customdateformatter.service';
import { MatDialog } from "@angular/material/dialog";
import { ListComponent } from '../list/list.component';
import { ExcelService } from '../excel.service';


const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
};

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: CalendarDateFormatter,
      useClass: CustomdateformatterService,
    },
  ],
  styleUrls: ['./calender.component.scss']
})
export class CalenderComponent implements OnInit {

  viewDate: Date = new Date();
  calendarView = 'month';
  eventDetails = {};
  refresh: Subject<any> = new Subject(); // for refreshing calendar model/view
  calenderWHeader = new Date().getDate();
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  doneList = [];
events: CalendarEvent[] = [];

activeDayIsOpen: boolean = false;

  constructor(public dialog: MatDialog,private excelService:ExcelService) {

  }

  weekHeader(data) {
      this.eventDetails = '';
      this.calenderWHeader = data.getDate();
      this.calendarView = 'day';
      this.viewDate = data;
  }
  exportAsXLSX():void{
    console.log(this.events)
    this.excelService.exportAsExcelFile(this.doneList,'sample')
  }
  
dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void { 
  console.log(date,events,this.viewDate)
  this.viewDate = date;
  this.dialog.open(ListComponent, {
    width: "85%",
    height: "100%",
    data:events
  }).afterClosed().subscribe(res=>{
    console.log(res)
    if(res.status && res['data1'].length==0){
        this.events.push( {
              start:this.viewDate,
              end:this.viewDate,
              color: colors.red,
              title:`Number of Todos ${res.todoList.length}`
            },
            {
              start:this.viewDate,
              end:this.viewDate,
              color: colors.yellow,
              title:`Number of Progress ${res.progressList.length}`
            },
            {
              start:this.viewDate,
              end:this.viewDate,
              color:colors.blue,
              title:`Number of Done ${res.completeList.length}`
            })
      }
      else if(res.status && res['data1'].length>0 && isSameMonth(date, this.viewDate)){
        this.events.forEach(el=>{
          if(el.title.includes('Number of Todos')){
            el.title = `Number of Todos ${res.todoList.length}`
          }
          if(el.title.includes('Number of Progress')){
            el.title = `Number of Progress ${res.progressList.length}`
          }
          if(el.title.includes('Number of Done')){
            el.title = `Number of Done ${res.completeList.length}`
          }
        })
      }
      this.refresh.next();
      this.doneList = res.completeList;
  })
}


  ngOnInit() {

  }
}
