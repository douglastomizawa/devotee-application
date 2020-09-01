import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page.component';
import { FooterComponent } from './../footer/footer.component';



@NgModule({
  declarations: [
    LoginPageComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[LoginPageComponent]
})
export class LoginPageModule { }
