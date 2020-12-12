import { Component, OnInit } from "@angular/core";
import { StaticDataService } from '../static-data.service';
import {Router} from '@angular/router'
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  constructor(public staticData:StaticDataService,public router:Router) {}
  heading = "LogIn";
  cardImg = "../../assets/Web/undraw_Login_re_4vu2.svg";
  hideSection = true;
  ngOnInit() {
    window.scrollTo(0, 0)
  }
  navigate() {
    this.hideSection = false;
  }
  // navigateback() {
  //   this.heading = "SignUp";
  //   ../../assets/Web/undraw_join_of2w.svg
  //   this.cardImg = "../../assets/Web/undraw_Login_re_4vu2.svg";
  //   this.hideSection = true;
  // }
  login(){
    this.staticData.isLoggedIn = true;
    this.router.navigate(['/home/dashboard']);
  }
  signup(){
    console.log("signup")
  }
}
