import { TranslateService } from './../shared/translate.service';
import { MatButtonModule } from '@angular/material/button';
import { FooterComponent, FooterModalComponent } from './footer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {MatDialogModule} from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  declarations: [FooterComponent, FooterModalComponent],
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
    TranslateService
  ]
})
export class FooterModule { }
