import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserSettingsComponent } from './user-settings.component';


const UserSettingsRoutes = [{path: '', component: UserSettingsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(UserSettingsRoutes)],
  exports: [RouterModule]
})
export class UserSettingsRountingModule{}
