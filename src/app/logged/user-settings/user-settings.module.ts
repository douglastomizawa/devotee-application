import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

import { UserSettingsRountingModule } from './user-settings.rounting.module';

import { UserSettingsComponent } from './user-settings.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [UserSettingsComponent],
  imports: [
    CommonModule,
    UserSettingsRountingModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
  ]
})
export class UserSettingsModule { }
