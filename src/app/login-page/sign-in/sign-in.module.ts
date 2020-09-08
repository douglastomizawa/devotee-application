import { SignInRountingModule } from './sign-in.rounting.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';

import { SignInComponent } from './sign-in.component';

import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [SignInComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    SignInRountingModule,
    ReactiveFormsModule,
  ],
  exports:[
    SignInComponent,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    SignInRountingModule,
    ReactiveFormsModule,
  ],
  providers:[
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ]
})
export class SignInModule { }
