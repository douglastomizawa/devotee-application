import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TermsOfUseComponent } from './terms-of-use.component';



@NgModule({
  declarations: [TermsOfUseComponent],
  imports: [
    CommonModule
  ],
  exports:[
    TermsOfUseComponent
  ]
})
export class TermsOfUseModule { }
