import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header-logo/header-logo.component';
import { TitleAndSubComponent } from './title-and-sub/title-and-sub.component';



@NgModule({
  declarations: [HeaderComponent, TitleAndSubComponent],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent,
    TitleAndSubComponent
  ]
})
export class ComponentsModule { }
