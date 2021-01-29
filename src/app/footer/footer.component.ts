import { TranslateService } from '../shared/translate.service';
import { Component, OnInit, Inject, Injectable } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { TabsFooterTermsComponent } from './footer-modal.component';
export interface DialogData {

}
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  copyright;
  textFooter;
  constructor(
    private translatePage: TranslateService,
    public dialog: MatDialog,
    private readonly breakpointObserver: BreakpointObserver,
    private footerTabs: TabsFooterTermsComponent) { }
  animal: string;
  name: string;
  isExtraSmall: Observable<BreakpointState> = this.breakpointObserver.observe(
    Breakpoints.XSmall
  );


  openDialog(): void {
    const d = this.dialog.open(FooterModalComponent, {
      width: 'calc(100% - 50px)',
      maxWidth: '100vw'
    });
    const smallDialogSubscription = this.isExtraSmall.subscribe(size => {
      if (size.matches) {
        d.updateSize('100vw', '100vh');
      } else {
        d.updateSize('80%', '80%');
      }
    });
    d.afterClosed().subscribe(() => {
      smallDialogSubscription.unsubscribe();
    });

  }
  execClickTabsShow(name: any): void{
    this.footerTabs.execClickTabs(name);
  }

  ngOnInit(): void {
    this.textFooter = this.translatePage.textTranslate;
    this.copyright = ` Copyright © ${new Date().getFullYear()} ${this.textFooter.copyright}`;
    this.footerTabs.hideTabs();
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
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private translatePage: TranslateService, private router: Router, private footerTabs: TabsFooterTermsComponent) {}
    ngOnInit(): void {
      this.textFooter = this.translatePage.textTranslate;
      this.footerTabs.hideTabs();
    }
    execClickTabsShow(name: any): void{
      this.footerTabs.execClickTabs(name);
    }
    onNoClick(): void {
      this.dialogRef.close();
    }

}
