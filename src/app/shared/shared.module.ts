import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { SharedRoutingModule } from './shared-routing.module';
import { BaseComponent } from './base/base.component';


@NgModule({
  declarations: [
    BaseComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatSnackBarModule
  ]
})
export class SharedModule { }
