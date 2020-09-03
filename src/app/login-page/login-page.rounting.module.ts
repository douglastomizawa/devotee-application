import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const loginRoutes = [];

@NgModule({
  imports:[RouterModule.forChild(loginRoutes)],
  exports:[RouterModule]
})
export class LoginRountingModule{}
