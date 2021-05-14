import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QRSignInComponent } from '../qr-sign-in/qr-sign-in.component';
import { QRCodeModule } from 'angularx-qrcode';





@NgModule({
  declarations: [QRSignInComponent],
  imports: [
    CommonModule,
    QRCodeModule
  ]
})
export class QRSignInModule { }
