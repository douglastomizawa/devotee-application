import { RouterModule } from '@angular/router';
import { TranslateService } from './../../../shared/translate.service';
import { FooterModule } from './../../../footer/footer.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAccountContinueComponent } from './create-account-continue.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { User } from '../../../core/model/client.model';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { CreateAccountContinueRountingModule } from './create-account-continue.rounting.module';



@NgModule({
  declarations: [CreateAccountContinueComponent],
  imports: [
    RouterModule,
    CommonModule,
    FooterModule,
    MatCardModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
    CreateAccountContinueRountingModule,


  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatAutocompleteModule,
    CreateAccountContinueComponent,
  ],
  providers : [
    TranslateService,
    User
  ]
})
export class CreateAccountContinueModule { }
