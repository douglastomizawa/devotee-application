import { ButtonsComponent } from './../buttons/buttons.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page.component';
import { FooterComponent } from './../footer/footer.component';



@NgModule({
  declarations: [
    LoginPageComponent,
    FooterComponent,
    ButtonsComponent
  ],
  imports: [
    CommonModule

  ],
  exports:[LoginPageComponent]
})
export class LoginPageModule { }
