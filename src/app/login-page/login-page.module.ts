import { QRCodeModule } from 'angularx-qrcode';
import { QRSignInModule } from './qr-sign-in/qr-sign-in.module';
import { SignInModule } from './sign-in/sign-in.module';
import { LoginRountingModule } from './login-page.rounting.module';
import { FooterModule } from './../footer/footer.module';
import { ComponentsModule } from './../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { LoginPageComponent } from './login-page.component';
@NgModule({
  declarations: [
    LoginPageComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    ComponentsModule,
    FooterModule,
    LoginRountingModule,
    QRSignInModule,
    QRCodeModule
  ],
  exports: [
    SignInModule,
  ]
})
export class LoginPageModule { }
