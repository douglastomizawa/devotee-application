import { CreateAccountComponent } from './create-account.component';

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const loginRoutes = [{path:'', component:CreateAccountComponent},
{path:'create2', component: CreateAccountComponent}];

@NgModule({
  imports:[RouterModule.forChild(loginRoutes)],
  exports:[RouterModule]
})
export class CreateAccountRountingModule{}
