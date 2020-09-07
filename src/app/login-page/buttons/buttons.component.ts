import { QRSignInComponent } from './../qr-sign-in/qr-sign-in.component';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '../../shared/translate.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from './../../footer/footer.component';
@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {
  text;
  constructor(private translatePage: TranslateService, public dialog: MatDialog ) { }
  openDialog(): void {
    const dialogRef = this.dialog.open(QRSignInModalComponent, {
      width: '100%',
      height: '80%'
    });

  }
  ngOnInit(): void {
    this.text = this.translatePage.textTranslate;
  }

}
@Component({
  selector: 'app-qr-sign-modal',
  templateUrl: '../qr-sign-in/qr-sign-in.component.html',
  styleUrls: ['../qr-sign-in/qr-sign-in.component.scss']
})
export class QRSignInModalComponent implements OnInit {
  textQr;
  constructor(
    public dialogRef: MatDialogRef<QRSignInModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private translatePage: TranslateService) {}
    ngOnInit(): void {
      this.textQr = this.translatePage.textTranslate;
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
