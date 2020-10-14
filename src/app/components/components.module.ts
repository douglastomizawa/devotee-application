import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header-logo/header-logo.component';
import { TitleAndSubComponent } from './title-and-sub/title-and-sub.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';



@NgModule({
  declarations: [HeaderComponent, TitleAndSubComponent, LoadingSpinnerComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ],
  exports:[
    HeaderComponent,
    TitleAndSubComponent,
    LoadingSpinnerComponent,
  ]
})
export class ComponentsModule { }
