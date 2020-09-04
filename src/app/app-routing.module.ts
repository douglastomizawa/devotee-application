import { TermsOfUseComponent } from './footer/terms-of-use/terms-of-use.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
    },
  {path:'', loadChildren: () => import('src/app/login-page/login-page.module').then(m => m.LoginPageModule)}

  //= {path: 'signin', component: SignInPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
