import { ButtonsComponent } from './../buttons/buttons.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page.component';
import { FooterComponent } from './../footer/footer.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    LoginPageComponent,
    FooterComponent,
    ButtonsComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
  ],
  exports:[
    LoginPageComponent,
    MatButtonModule,
  ]
})
export class LoginPageModule { }
