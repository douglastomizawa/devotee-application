import { LoggedComponent } from './../../../logged/logged.component';
import { NgModule } from '@angular/core';
import { RouterModule, CanActivate } from '@angular/router';
import { WhoAreYouModule } from './../who-are-you/who-are-you.module';
import { IamEspecialModule } from './../who-are-you/iam-especial/iam-especial.module';
import { IamDevoteeModule } from './../who-are-you/iam-devotee/iam-devotee.module';

import { CreateAccountContinueComponent } from './create-account-continue.component';

const loginRoutes = [{
  path: '', component:  CreateAccountContinueComponent,
  children: [{
    path: 'create-account-continue',
    // tslint:disable-next-line:max-line-length
    loadChildren: () => import('src/app/login-page/create-account/who-are-you/who-are-you.module').then(m => m.WhoAreYouModule)
  },
  {
    path: 'devotee-person',
    // tslint:disable-next-line:max-line-length
    loadChildren: () => import('src/app/login-page/create-account/who-are-you/iam-devotee/iam-devotee.module').then(m => m.IamDevoteeModule)
  },
  {
    path: 'register',
    // tslint:disable-next-line:max-line-length
    loadChildren: () => import('src/app/login-page/create-account/who-are-you/iam-especial/iam-especial.module').then(m => m.IamEspecialModule)
  },
  ]}];

@NgModule({
  imports: [RouterModule.forChild(loginRoutes)],
  exports: [RouterModule]
})
export class CreateAccountContinueRountingModule{}
