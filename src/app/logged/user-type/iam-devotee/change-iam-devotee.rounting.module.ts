import { ChangeIamDevoteeComponent } from './change-iam-devotee.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';






const ChangeIamDevotee = [{path: '', component: ChangeIamDevoteeComponent}];

@NgModule({
  imports: [RouterModule.forChild(ChangeIamDevotee)],
  exports: [RouterModule]
})
export class ChangeIamDevoteeRountingModule{}
