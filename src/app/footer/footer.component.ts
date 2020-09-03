import { TranslateService } from './../shared/translate.service';
import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {

}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  copyright;
  textFooter;
  constructor(private translatePage: TranslateService, public dialog: MatDialog) { }
  animal: string;
  name: string;

  openDialog(): void {
    const dialogRef = this.dialog.open(FooterModalComponent, {
      width: '100%',
      height: '80%'
    });

  }

  ngOnInit(): void {
    this.textFooter = this.translatePage.textTranslate;
    this.copyright = ` Copyright © ${new Date().getFullYear()} ${this.textFooter.copyright}`

  }

}
@Component({
  selector: 'app-footer-modal',
  templateUrl: 'footer-modal.component.html',
  styleUrls: ['./footer-modal.component.scss', '../login-page/login-page.component.scss']
})
export class FooterModalComponent implements OnInit {
textFooter;

  constructor(
    public dialogRef: MatDialogRef<FooterModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private translatePage: TranslateService) {}
    ngOnInit(): void {
      this.textFooter = this.translatePage.textTranslate;
    }
  onNoClick(): void {
    this.dialogRef.close();

  }

}
