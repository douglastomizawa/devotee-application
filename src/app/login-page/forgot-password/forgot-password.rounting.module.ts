import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password.component';



const forgotPassword = [{path: '', component: ForgotPasswordComponent }];

@NgModule({
  imports:[RouterModule.forChild(forgotPassword)],
  exports:[RouterModule]
})
export class ForgotPasswordRountingModule{}
