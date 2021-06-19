import { ChangeIamDevoteeModule } from './user-type/iam-devotee/change-iam-devotee.module';
import { ChangeIamEspecialModule } from './user-type/iam-especial/change-iam-especial.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoggedComponent } from './logged.component';

const loggedRoutes = [{path: '', component: LoggedComponent, children: [
  {path: 'sugestion-matches', loadChildren: () => import('src/app/logged/sugestion-matches/sugestion-matches.module').then(m => m.SugestionMatchesModule)},
  {path: 'matches', loadChildren: () => import('src/app/logged/matches/matches.module').then(m => m.MatchesModule)},
  {path: 'settings', loadChildren: () => import('src/app/logged/user-settings/user-settings.module').then(m => m.UserSettingsModule)},
  {
    path: 'preferences',
    // tslint:disable-next-line:max-line-length
    loadChildren: () => import('src/app/login-page/create-account/who-are-you/preferences/preferences.module').then(m => m.PreferencesModule)
  },
  {
    path: 'edit',
    // tslint:disable-next-line:max-line-length
    loadChildren: () => import('src/app/logged/user-type/iam-especial/change-iam-especial.module').then(m => m.ChangeIamEspecialModule)
  },

]},
];

@NgModule({
  imports: [RouterModule.forChild(loggedRoutes)],
  exports: [RouterModule]
})
export class LoggedRountingModule{}
