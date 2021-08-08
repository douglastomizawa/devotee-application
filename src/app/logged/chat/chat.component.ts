import { LoadingSpinnerService } from 'src/app/core/loading-spinner.service';
import { SavePhoneNumberService } from './../../core/services/profile-infos/save-phone-number.service';
import { SizeModalService } from './../../core/factory/size-modal.service';
import { MatDialog } from '@angular/material/dialog';
import { take } from 'rxjs/operators';
import { GetProfileService } from './../../core/services/get-profile.service';
import { ProfileService } from './../../core/services/profile.service';
import { ChatAndMatchesService } from './../../core/services/chat-and-matches.service';
import { TranslateService } from 'src/app/shared/translate.service';
import { Component, OnInit } from '@angular/core';
import { ProfileComponent } from './../../components/profile/profile.component';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  text;
  matchId: number;
  matchUser;
  isHidden;
  nameWidth: string;

  constructor(
    private translatePage: TranslateService,
    private getProfileAPI: ProfileService,
    private emitterMatchId: ChatAndMatchesService,
    private profileAPI: GetProfileService,
    public dialog: MatDialog,
    private sizeModal: SizeModalService,
    private phoneNumber: SavePhoneNumberService,
    private loadingSpinnerC: LoadingSpinnerService,

  ) { }
  openProfile(userId): void {
    this.phoneNumber.getPhoneNumberSave(userId);
    this.phoneNumber.phoneNumberEvent.pipe(take(1)).subscribe(res => {
      this.profileAPI.getProfileInfos(userId);
    });
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
  ngOnInit(): void {
    this.translatePage.veriyLanguage();
    this.text = this.translatePage.textTranslate;
    this.getInfosMatch();
  }
  getInfosMatch(): void{
    this.emitterMatchId.emitterMatchIdClick.subscribe((clickedInfos: any) => {
      this.getProfileAPI.get(clickedInfos.matchId).subscribe(res => {
        this.matchUser = res;
        this.isHidden = clickedInfos.clickedIs;
      });
    });
  }
  returnToMatches(): void {
    this.isHidden = true;
  }
}
