import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'dialog-edit-contact',
  templateUrl: './contacts.edit.html',
  styleUrls: ['./contacts.edit.css']
})
export class DialogEditContact {

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :'';
  }

  constructor(
    public dialogRef: MatDialogRef<DialogEditContact>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
