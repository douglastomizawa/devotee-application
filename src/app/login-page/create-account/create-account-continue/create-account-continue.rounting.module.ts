import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CreateAccountContinueComponent } from './create-account-continue.component';

const loginRoutes = [{path: '', component:  CreateAccountContinueComponent }];

@NgModule({
  imports:[RouterModule.forChild(loginRoutes)],
  exports:[RouterModule]
})
export class CreateAccountContinueRountingModule{}
