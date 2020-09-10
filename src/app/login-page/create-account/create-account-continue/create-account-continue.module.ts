import { RouterModule } from '@angular/router';
import { TranslateService } from './../../../shared/translate.service';
import { FooterModule } from './../../../footer/footer.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAccountContinueComponent } from './create-account-continue.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

import { CreateAccountContinueRountingModule } from './create-account-continue.rounting.module';



@NgModule({
  declarations: [CreateAccountContinueComponent],
  imports: [
    CommonModule,
    FooterModule,
    MatCardModule,
    MatButtonModule,
    RouterModule,
    CreateAccountContinueRountingModule,


  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    CreateAccountContinueComponent,
  ],
  providers : [
    TranslateService
  ]
})
export class CreateAccountContinueModule { }
