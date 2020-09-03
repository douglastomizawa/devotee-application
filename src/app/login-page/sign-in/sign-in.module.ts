import { SignInRountingModule } from './sign-in.rounting.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';

import { SignInComponent } from './sign-in.component';


@NgModule({
  declarations: [SignInComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    SignInRountingModule,
  ],
  exports:[
    SignInComponent,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    SignInRountingModule,
  ],
  providers:[
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ]
})
export class SignInModule { }
