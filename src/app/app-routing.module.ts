import { QRSignInComponent } from './login-page/qr-sign-in/qr-sign-in.component';
import { SignInComponent } from './login-page/sign-in/sign-in.component';
import { SignInModule } from './login-page/sign-in/sign-in.module';
import { ButtonsComponent } from './buttons/buttons.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  { path: '',
  redirectTo: '/login',
  pathMatch: 'full'
},
  {path: '', component: LoginPageComponent,children:[
    {path:'login', component:ButtonsComponent},
    {path:'signin', component:SignInComponent},
    {path:'signinqr', component:QRSignInComponent}
  ]},
  // {path: 'signin', component: SignInPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
