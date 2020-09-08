import { ButtonsComponent } from './buttons.component';

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const loginRoutes = [{path:'', component:ButtonsComponent}];

@NgModule({
  imports:[RouterModule.forChild(loginRoutes)],
  exports:[RouterModule]
})
export class ButtonsRountingModule{}
