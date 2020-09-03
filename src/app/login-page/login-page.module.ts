import { LoginRountingModule } from './login-page.rounting.module';
import { FooterModule } from './../footer/footer.module';
import { ComponentsModule } from './../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';

import { LoginPageComponent } from './login-page.component';
import { ButtonsComponent } from './../buttons/buttons.component';
@NgModule({
  declarations: [
    LoginPageComponent,
    ButtonsComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    ComponentsModule,
    FooterModule,
    MatDialogModule,
    LoginRountingModule,

  ],
  exports:[
    LoginPageComponent,
    MatDialogModule
  ]
})
export class LoginPageModule { }
