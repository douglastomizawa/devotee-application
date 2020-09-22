
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './core/guards/auth.guard.service';

import { CreateAccountContinueModule } from './login-page/create-account/create-account-continue/create-account-continue.module';

const routes: Routes = [
    { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
    },
  {path: '', loadChildren: () => import('src/app/login-page/login-page.module').then(m => m.LoginPageModule)},
  // tslint:disable-next-line:max-line-length
  {path: '',
  // tslint:disable-next-line:max-line-length
    loadChildren: () => import('src/app/login-page/create-account/create-account-continue/create-account-continue.module').then(m => m.CreateAccountContinueModule),
    canActivate: [AuthGuardService]
},
{
  path: '',
// tslint:disable-next-line:max-line-length
  loadChildren: () => import('src/app/logged/logged.module').then(m => m.LoggedModule)
}
  //= {path: 'signin', component: SignInPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
