import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { IamEspecialComponent } from './iam-especial.component';




const IamEspecial = [{path: '', component: IamEspecialComponent}];

@NgModule({
  imports: [RouterModule.forChild(IamEspecial)],
  exports: [RouterModule]
})
export class IamEspecialRountingModule{}
