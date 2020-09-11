import { RouterModule } from '@angular/router';
import { TranslateService } from './../../../shared/translate.service';
import { FooterModule } from './../../../footer/footer.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAccountContinueComponent } from './create-account-continue.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

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
    CreateAccountContinueRountingModule,


  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatAutocompleteModule,
    CreateAccountContinueComponent,
  ],
  providers : [
    TranslateService
  ]
})
export class CreateAccountContinueModule { }
