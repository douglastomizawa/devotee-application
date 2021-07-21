import { QrcodeService } from './../../core/services/login/qrcode.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { TranslateService } from '../translate.service';
import { DialogData } from 'src/app/footer/footer.component';
import { ResponseQrCodeInterface } from 'src/app/core/interfaces/qrcode';

@Component({
  selector: 'app-qr-sign-in',
  templateUrl: './qr-sign-in.component.html',
  styleUrls: ['./qr-sign-in.component.scss'],
})
export class QRSignInComponent implements OnInit {
  textQr;
  qrCode: string;
  showLoading: boolean;
  constructor(
    private translatePage: TranslateService,
    private qrCodeData: QrcodeService,
    public dialogRef: MatDialogRef<QRSignInComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData){}

  onNoClick() {
    this.dialogRef.close();
  }
  ngOnInit(): void {
    this.textQr = this.translatePage.textTranslate;
    this.getQrCodeData();
  }
  getQrCodeData() {
    this.showLoading = true;
    this.qrCodeData.get().subscribe((qrCode:ResponseQrCodeInterface)=>{
      if (qrCode.status) {
        this.qrCode = qrCode.qr_code;
        this.showLoading = false;
      }
    })
  }
}
