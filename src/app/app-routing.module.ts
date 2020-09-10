import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateAccountContinueModule } from './login-page/create-account/create-account-continue/create-account-continue.module';

const routes: Routes = [
    { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
    },
  {path: '', loadChildren: () => import('src/app/login-page/login-page.module').then(m => m.LoginPageModule)},
  // tslint:disable-next-line:max-line-length
  {path: 'create-continue', loadChildren: () => import('src/app/login-page/create-account/create-account-continue/create-account-continue.module').then(m => m.CreateAccountContinueModule)}

  //= {path: 'signin', component: SignInPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
