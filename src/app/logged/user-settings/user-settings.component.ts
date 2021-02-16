import { BreakpointState, BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { take } from 'rxjs/operators';
import { LoggedInUserIdService } from './../../core/services/logged-in-user-id.service';
import { GetProfileService } from './../../core/services/get-profile.service';
import {  MatDialog } from '@angular/material/dialog';
import { RedirectLoggedService } from './../../core/services-redirect/redirect-logged.service';
import { Location } from '@angular/common';
import { Component, OnInit, Inject } from '@angular/core';
import { TranslateService } from 'src/app/shared/translate.service';
import { Observable } from 'rxjs';
import { ProfileComponent } from './../../components/profile/profile.component';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent implements OnInit {
  text;
  nameWidth: string;
  constructor(
    private translatePage: TranslateService,
    private location: Location,
    private redirectLoggedService: RedirectLoggedService,
    private profileAPI: GetProfileService,
    public dialog: MatDialog,
    private userId: LoggedInUserIdService,
    private readonly breakpointObserver: BreakpointObserver,
  ) { }
  isExtraSmall: Observable<BreakpointState> = this.breakpointObserver.observe(
    Breakpoints.XSmall
  );
  isSmall: Observable<BreakpointState> = this.breakpointObserver.observe(
    Breakpoints.Small
  );
  isMedium: Observable<BreakpointState> = this.breakpointObserver.observe(
    Breakpoints.Medium
  );
  isLarge: Observable<BreakpointState> = this.breakpointObserver.observe(
    Breakpoints.Large
  );
  isXLarge: Observable<BreakpointState> = this.breakpointObserver.observe(
    Breakpoints.XLarge
  );
  logout(): void{
    this.redirectLoggedService.loggedRedirect(false, '/login');
  }
  ngOnInit(): void {
    this.translatePage.veriyLanguage();
    this.text = this.translatePage.textTranslate;
  }
  return(): void {
    this.location.back();
  }
  openProfile(): void {
    this.profileAPI.getProfileInfos(this.userId.idUser);
    this.openProfileModal();
  }
  openProfileModal(): void {
    this.profileAPI.profile.pipe(take(1)).subscribe(res => {
      if (res) {
        const dialogRef = this.dialog.open(ProfileComponent, {
          width: 'calc(100% - 50px)',
          maxWidth: '100vw',
          panelClass: 'container-profile',
        });
        const smallDialogSubscription = this.isExtraSmall.subscribe(size => {
          if (size.matches) {
            this.nameWidth = 'extraSmall';
          }
        });
        const tabletDialogSubscription = this.isSmall.subscribe(size => {
          if (size.matches) {
            this.nameWidth = 'small';
          }
        });
        const tabletPlustDialogSubscription = this.isMedium.subscribe(size => {
          if (size.matches) {
            this.nameWidth = 'medium';
          }
        });
        const desktopDialogSubscription = this.isLarge.subscribe(size => {
          if (size.matches) {
            this.nameWidth = 'large';
          }
        });
        const desktopLargeDialogSubscription = this.isXLarge.subscribe(size => {
          if (size.matches) {
            this.nameWidth = 'extraLarge';
          }
        });
        switch (this.nameWidth) {
          case 'extraSmall':
            dialogRef.updateSize('100vw', '100vh');
            break;
          case 'small':
            dialogRef.updateSize('80%', '80%');
            break;
          case 'medium':
            dialogRef.updateSize('80%', '80%');
            break;
          case 'large':
            dialogRef.updateSize('60%', '80%');
            break;
          case 'extraLarge':
            dialogRef.updateSize('60%', '80%');
            break;
          default:
            break;
        }
        dialogRef
        .afterClosed()
        .subscribe(() => {
          smallDialogSubscription.unsubscribe();
          tabletDialogSubscription.unsubscribe();
          tabletPlustDialogSubscription.unsubscribe();
          desktopDialogSubscription.unsubscribe();
          desktopLargeDialogSubscription.unsubscribe();
        });
        dialogRef
        .afterClosed()
        .pipe(take(1))
        .subscribe((result => {
          console.log('dialog was closed')
        }));
      }
    });

  }
}
