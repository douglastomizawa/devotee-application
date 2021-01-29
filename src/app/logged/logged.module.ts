import { ComponentsModule } from './../components/components.module';
import { LoadingSpinnerService } from './../core/loading-spinner.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggedRountingModule } from './logged.rounting.module';
import { FooterModule } from '../footer/footer.module';

import { LoggedComponent } from './logged.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [LoggedComponent],
  imports: [
    CommonModule,
    FooterModule,
    MatIconModule,
    LoggedRountingModule,
    ComponentsModule
  ]
})
export class LoggedModule { }
