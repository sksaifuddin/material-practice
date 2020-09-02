import { User } from './../../models/user.model';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent implements OnInit {
  userForm: FormGroup;
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: User, 
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DialogBoxComponent>
  ) { }

  ngOnInit(): void {
    this.setForm();
    this.userForm.setValue(this.data);
  }

  setForm(): void {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      company: ['', Validators.required],
      address: ['', Validators.required]
    })
  }

  onSave(): void {
    this.dialogRef.close(this.userForm.value);
  }

}
