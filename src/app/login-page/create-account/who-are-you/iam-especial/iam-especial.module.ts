import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IamEspecialRountingModule } from './iam-especial.rounting.module';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';

import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';

import { IamEspecialComponent } from './iam-especial.component';

import {  ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [IamEspecialComponent],
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
    IamEspecialRountingModule
  ],
  exports: [
    MatCardModule,
    MatInputModule,
    MatIconModule,
  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ]
})
export class IamEspecialModule { }
