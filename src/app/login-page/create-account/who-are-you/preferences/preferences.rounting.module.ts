import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PreferencesComponent } from './preferences.component';



const preferences = [{path: '', component: PreferencesComponent}];

@NgModule({
  imports: [RouterModule.forChild(preferences)],
  exports: [RouterModule]
})
export class PreferencesRountingModule{}
