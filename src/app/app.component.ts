import { Component } from '@angular/core';
import {StaticDataService} from './static-data.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myworktracker';
  menus=this.staticData.menuList;
  constructor(public staticData:StaticDataService,public router:Router){}

  navigate(value){
   this.router.navigate([value])
  }
}
