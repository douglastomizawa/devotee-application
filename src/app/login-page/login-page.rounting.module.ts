import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page.component';

const loginRoutes = [
  {path: '', component: LoginPageComponent, children: [
    {path: 'login', loadChildren: () => import('src/app/login-page/buttons/buttons.module').then(m => m.ButtonsPageModule)},
    {path: 'signin', loadChildren: () => import('src/app/login-page/sign-in/sign-in.module').then(m => m.SignInModule)},
    // tslint:disable-next-line:max-line-length
    {path: 'createaccount', loadChildren: () => import('src/app/login-page/create-account/create-account.module').then(m => m.CreateAccountModule)},
    // tslint:disable-next-line:max-line-length
    {path: 'forgot-password', loadChildren: () => import('src/app/login-page/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule)},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(loginRoutes)],
  exports: [RouterModule]
})
export class LoginRountingModule{}
