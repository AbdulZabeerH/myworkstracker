import { Component, OnInit } from "@angular/core";
import { StaticDataService } from '../static-data.service';
import {Router} from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  constructor(public staticData:StaticDataService,public router:Router,
    private formBuilder: FormBuilder,private _snackBar: MatSnackBar) {}
  heading = "LogIn";
  cardImg = "../../assets/Web/undraw_Login_re_4vu2.svg";
  hideSection = true;
  dataForm : FormGroup
  profileArr = [
    {
      "name":"Personal",
      "value":"1"
    },
    {
      "name":"Professional",
      "value":"2"
    }
  ]
  ngOnInit() {
    window.scrollTo(0, 0)
    if(this.hideSection){
        this.dataForm = this.formBuilder.group({
          email:['',Validators.required],
          password:['',Validators.required]
        })
    }
  }
  navigate() {
    this.hideSection = false;
    this.dataForm = this.formBuilder.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',Validators.required],
      role:[''],
      manager_email:[''],
      profile:['',Validators.required],
      password:['',Validators.required],
      confirm_password:['',Validators.required]
    })
  }
  navigateBack(){
    this.hideSection = true;
    this.dataForm = this.formBuilder.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }
  login(){
    if(this.dataForm.valid){
      this.staticData.isLoggedIn = true;
      this.router.navigate(['/home/dashboard']);
    }else{
      this._snackBar.open("Please fill the mandatory fields",'close',{ duration: 3000 })
    }
  }
  signup(){
    if(this.dataForm.valid){
    console.log("signup",this.dataForm.value)
    }
    else{
      this._snackBar.open("Please fill the mandatory fields",'close',{ duration: 3000 })
    }
  }
  profileFunc(data){ 
   data.value == 2 ? this.updateValidation('dataForm',['role','manager_email'],'Add') : this.updateValidation('dataForm',['role','manager_email'],'remove');
  }
  updateValidation(formGroupName,formCtrlNameArr,action){
      for(let i of formCtrlNameArr){
        if(action == 'Add'){
        this[formGroupName]['controls'][i].setValidators([Validators.required]);
        this[formGroupName]['controls'][i].updateValueAndValidity();
      }
      if(action == 'remove'){
        this[formGroupName]['controls'][i].clearValidators();
        this[formGroupName]['controls'][i].updateValueAndValidity();
      }
    }
  }
}
