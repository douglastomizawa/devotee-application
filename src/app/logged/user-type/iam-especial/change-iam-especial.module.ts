import { ChangeIamEspecialRountingModule } from './change-iam-especial.rounting.module';
import { UserSettingsRountingModule } from './../../user-settings/user-settings.rounting.module';
import { MatSelectSearchModule } from '../../../login-page/mat-select-search/mat-select-search.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ReactiveFormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';

import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { MedicinesService } from '../../../core/services/medicines.service';
import { GetValuesApisPtUsService } from '../../../core/services/get-values-apis-pt-us.service';
import { ChangeIamEspecialComponent } from './change-iam-especial.component';



@NgModule({
  declarations: [ChangeIamEspecialComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatSelectModule,
    ChangeIamEspecialRountingModule,
    MatSelectSearchModule,
    MatProgressSpinnerModule,
    MatMenuModule,
  ],
  exports: [
    MatCardModule,
    MatInputModule,
    MatIconModule,

  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher},
    MedicinesService,
    GetValuesApisPtUsService,

  ]
})
export class ChangeIamEspecialModule { }
