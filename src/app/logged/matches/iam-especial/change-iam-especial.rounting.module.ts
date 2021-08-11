import { ChangeIamEspecialComponent } from './change-iam-especial.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';





const ChangeIamEspecial = [{path: '', component: ChangeIamEspecialComponent}];

@NgModule({
  imports: [RouterModule.forChild(ChangeIamEspecial)],
  exports: [RouterModule]
})
export class ChangeIamEspecialRountingModule{}
