import { ComponentsModule } from './../components/components.module';
import { QRSignInComponent } from './qr-sign-in/qr-sign-in.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QRCodeModule } from 'angularx-qrcode';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  imports: [
    CommonModule,
    QRCodeModule,
    ComponentsModule,
    MatProgressSpinnerModule,
  ],
  declarations: [QRSignInComponent],
  exports:[
    QRSignInComponent,
    QRCodeModule,
  ]
})
export class SharedModule { }
