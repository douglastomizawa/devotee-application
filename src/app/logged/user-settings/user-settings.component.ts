import { SizeModalService } from './../../core/factory/size-modal.service';
import { LoadingSpinnerService } from './../../core/loading-spinner.service';
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
import { DeleteAccountComponent } from 'src/app/components/dialogs/delete-account/delete-account.component';

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
    private loadingSpinnerC: LoadingSpinnerService,
    private sizeModal: SizeModalService,

  ) { }
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
    this.loadingSpinnerC.ShowLoading = true;
    this.profileAPI.profile.pipe(take(1)).subscribe(res => {
      if (res) {
        this.loadingSpinnerC.ShowLoading = false;
        const dialogRef = this.dialog.open(ProfileComponent, {
          width: 'calc(100% - 50px)',
          maxWidth: '100vw',
          panelClass: 'container-profile',
        });
        this.sizeModal.setSizeModal(dialogRef);
        dialogRef
        .afterClosed()
        .pipe(take(1))
        .subscribe((result => {
          console.log('dialog was closed')
        }));
      }
    });
  }

  public confirmDeleteAccount() {
    const dialogRef = this.dialog.open(DeleteAccountComponent, {
      width: 'calc(100% - 50px)',
      maxWidth: '100vw',
      panelClass: 'container-delete-account',
    });
    this.sizeModal.setSizeModalDeleteAccount(dialogRef);
    dialogRef
    .afterClosed()
    .pipe(take(1))
    .subscribe((result => {
      console.log('dialog was closed')
    }));
  }
}
