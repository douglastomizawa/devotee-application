import { ButtonsComponent, QRSignInModalComponent } from './../buttons/buttons.component';
import { TranslateService } from './../../shared/translate.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qr-sign-in',
  templateUrl: './qr-sign-in.component.html',
  styleUrls: ['./qr-sign-in.component.scss']
})
export class QRSignInComponent implements OnInit {
  textQr;
  imgQrCode = "../../../assets/QRCode-criar@2x.png";
  constructor( private translatePage: TranslateService, private modalQr: QRSignInModalComponent) {}

  onNoClick() {
    this.modalQr.onNoClick();
  }
    ngOnInit(): void {

      this.textQr = this.translatePage.textTranslate;
      console.log(this.textQr);
    }
}
