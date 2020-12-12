import { Component, OnInit } from '@angular/core';
import {StaticDataService} from '.././static-data.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  menus=this.staticData.menuList;
  constructor(public staticData:StaticDataService,public router:Router){}

  navigate(data){
    console.log(data,this.staticData.isLoggedIn)
    if(this.staticData.isLoggedIn && data.link=="/home/login")
    {
      this.staticData.isLoggedIn = false
      this.router.navigate(['/home'])
    }
    else{
      this.router.navigate([data.link])
    }
   
  }
  isLogIn(index,data){
    if((index==1 || index==2) && !this.staticData.isLoggedIn){
      return false;
    }
    else{
      return true;
    }
  }
  ngOnInit(){}

}
