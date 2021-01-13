import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  dataForm: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<PopupComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.dataForm = this.formBuilder.group({
      title:['',Validators.required],
      description:['',Validators.required]
    })
  }
  save(){
    if(this.dataForm.valid)
    this.dialogRef.close({status:true,data:this.dataForm.value})
    else
    this._snackBar.open("Please add the details","close")
  }
  cancel() {
    this.dialogRef.close({ status: false });
}
}
