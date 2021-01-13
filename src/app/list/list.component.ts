import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from "@angular/cdk/drag-drop";
import { Component, OnInit ,Inject} from "@angular/core";
import { PopupComponent } from "../popup/popup.component";
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  constructor(public dialog: MatDialog,
    public dialogRef: MatDialogRef<ListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    ) {}
  todoList = [
    {
      title: "Angular",
      description: "Angular",
    },
    {
      title: "React",
      description: "Angular",
    },
    {
      title: "Angular 1",
      description: "Angular",
    },
    {
      title: "React 2",
      description: "Angular",
    },
    {
      title: "React",
      description: "Angular",
    },
    {
      title: "Angular 1",
      description: "Angular",
    },
    {
      title: "React 2",
      description: "Angular",
    },
  ];
  progressList = [
    {
      title: "Angular",
      description: "Angular",
    },
    {
      title: "Angular",
      description: "Angular",
    },
  ];
  doneList = [
    {
      title: "Angular",
      description: "Angular",
    },
    {
      title: "Angular",
      description: "Angular",
    },  {
      title: "React",
      description: "Angular",
    },
    {
      title: "Angular 1",
      description: "Angular",
    },
    {
      title: "React 2",
      description: "Angular",
    },
  ];
  ngOnInit() {}
  addInTodoList() {
    this.dialog.open(PopupComponent, {
      width: "696px",
      height: "400px",
    }).afterClosed().subscribe(res=>{
      if(res.status)
      this.todoList.push(res.data)
    });
  }
  onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
  save(){
    this.dialogRef.close({ status: true,todoList:this.todoList,progressList:this.progressList,completeList:this.doneList,data1:this.data });
  }
  cancel(){
    this.dialogRef.close({ status: false });
  }
}
