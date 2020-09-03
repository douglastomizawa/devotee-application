import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page.component';
import { CreateAccountModule } from './create-account/create-account.module';

const loginRoutes = [
{path:'', component:LoginPageComponent, children:[
  {path:'login',loadChildren: () => import('src/app/login-page/buttons/buttons.module').then(m => m.ButtonsPageModule)},
  {path:'signin', loadChildren: () => import('src/app/login-page/sign-in/sign-in.module').then(m => m.SignInModule)},
  {path:'createaccount', loadChildren: () => import('src/app/login-page/create-account/create-account.module').then(m => m.CreateAccountModule)}
  // {path:'signin', component:SignInComponent},
  // {path:'signinqr', component:QRSignInComponent}
]},
];

@NgModule({
  imports:[RouterModule.forChild(loginRoutes)],
  exports:[RouterModule]
})
export class LoginRountingModule{}
