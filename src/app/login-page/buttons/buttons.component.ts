import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '../../shared/translate.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from './../../footer/footer.component';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable, from } from 'rxjs';
import { QRSignInComponent } from '../../shared/qr-sign-in/qr-sign-in.component';
@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {
  text;
  isExtraSmall: Observable<BreakpointState> = this.breakpointObserver.observe(
    Breakpoints.XSmall
  );
  isMedium: Observable<BreakpointState> = this.breakpointObserver.observe(
    Breakpoints.Medium
  );
  isLarge: Observable<BreakpointState> = this.breakpointObserver.observe(
    Breakpoints.Large
  );
  constructor(
    private translatePage: TranslateService,
    public dialog: MatDialog,
    private readonly breakpointObserver: BreakpointObserver
    ){}
  openDialog(): void {
    const d = this.dialog.open(QRSignInComponent, {
      width: 'calc(100% - 50px)',
      maxWidth: '100vw'
    });
    const smallDialogSubscription = this.isExtraSmall.subscribe(size => {
      size.matches ? d.updateSize('100vw', '100vh') : undefined ;
    });

    const mediumDialogSubscription = this.isMedium.subscribe(size => {
       size.matches ? d.updateSize('70%', '50%') : undefined;
    });
    const largeDialogSubscription = this.isLarge.subscribe(size => {
      size.matches ? d.updateSize('70%', '70%') : undefined ;

    });
    d.afterClosed().subscribe(() => {
      smallDialogSubscription.unsubscribe();
      mediumDialogSubscription.unsubscribe();
      largeDialogSubscription.unsubscribe();
    });

  }
  ngOnInit(): void {
    this.text = this.translatePage.textTranslate;
  }

}
