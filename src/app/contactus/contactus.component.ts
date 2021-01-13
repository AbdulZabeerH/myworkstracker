import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private _snackBar: MatSnackBar) { }
  feedbackForm:FormGroup;
  feedbacks=[];
  ngOnInit() {
    window.scrollTo(0, 0)
    this.feedbackForm = this.formBuilder.group({
      firstname:['',Validators.required],
      // email:['',Validators.required],
      comment:['',Validators.required]
    })
  }
  feedback(){
  if(this.feedbackForm.valid)
  {
    this.feedbacks.push(this.feedbackForm.value)
    this.feedbackForm.reset();
}
else{
  this._snackBar.open("Please fill all mandatory fields",'close',{ duration: 3000 })
}
}
}
