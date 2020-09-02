import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSliderModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [
    MatSliderModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
