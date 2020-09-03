import { SignInComponent } from './sign-in.component';

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const loginRoutes = [{path:'', component:SignInComponent}];

@NgModule({
  imports:[RouterModule.forChild(loginRoutes)],
  exports:[RouterModule]
})
export class SignInRountingModule{}
