import { ComponentsModule } from './../../../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSliderModule} from '@angular/material/slider';
import {MatSelectModule} from '@angular/material/select';
import { PreferencesRountingModule } from './preferences.rounting.module';
import { MatSelectSearchModule } from './../../../mat-select-search/mat-select-search.module';
import {  ReactiveFormsModule } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { PreferencesComponent } from './preferences.component';



@NgModule({
  declarations: [PreferencesComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSliderModule,
    MatSelectModule,
    MatSelectSearchModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    PreferencesRountingModule,
    ComponentsModule,

  ]
})
export class PreferencesModule { }
