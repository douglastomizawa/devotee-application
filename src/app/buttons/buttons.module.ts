import { ButtonsComponent } from './buttons.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    ButtonsComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    ButtonsComponent,
    MatButtonModule
  ]
})
export class LoginPageModule { }
