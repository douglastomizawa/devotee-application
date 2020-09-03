import { TranslateService } from './../shared/translate.service';

import { FooterComponent, FooterModalComponent } from './footer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    FooterComponent,
    FooterModalComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatTabsModule,

  ],
  exports:[
    FooterComponent,
    MatButtonModule,
    MatDialogModule,
    MatTabsModule,

  ],
  providers:[
    TranslateService,

  ]
})
export class FooterModule { }
