import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { IamDevoteeComponent } from './iam-devotee.component';





const IamDevotee = [{path: '', component: IamDevoteeComponent}];

@NgModule({
  imports: [RouterModule.forChild(IamDevotee)],
  exports: [RouterModule]
})
export class IamDevoteeRountingModule{}
