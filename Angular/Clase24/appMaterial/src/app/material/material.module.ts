import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material'
@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: []
})
export class MaterialModule { }
