import { SharedModule } from './../../shared/shared.module';
import { ButtonsRountingModule } from './buttons.rounting.module';
import { RouterModule } from '@angular/router';
import { ButtonsComponent } from './buttons.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    ButtonsComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    // RouterModule,
    ButtonsRountingModule,
    SharedModule,
  ],
  exports: [
    ButtonsComponent,
    MatButtonModule
  ]
})
export class ButtonsPageModule { }
