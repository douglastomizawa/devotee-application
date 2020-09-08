import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SignInComponent } from './sign-in.component';


const loginRoutes = [{path:'', component:SignInComponent}];

@NgModule({
  imports:[RouterModule.forChild(loginRoutes)],
  exports:[RouterModule]
})
export class SignInRountingModule{}
