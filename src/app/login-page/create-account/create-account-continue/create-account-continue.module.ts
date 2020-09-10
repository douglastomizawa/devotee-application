import { TranslateService } from './../../../shared/translate.service';
import { FooterModule } from './../../../footer/footer.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAccountContinueComponent } from './create-account-continue.component';

import { CreateAccountContinueRountingModule } from './create-account-continue.rounting.module';



@NgModule({
  declarations: [CreateAccountContinueComponent],
  imports: [
    CommonModule,
    CreateAccountContinueRountingModule,
    FooterModule,
  ],
  exports: [
    CreateAccountContinueComponent
  ],
  providers : [
    TranslateService
  ]
})
export class CreateAccountContinueModule { }
