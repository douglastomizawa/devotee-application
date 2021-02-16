import { MatDialog } from '@angular/material/dialog';
import { take } from 'rxjs/operators';
import { GetProfileService } from './../../core/services/get-profile.service';
import { BreakpointState, Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
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
  matchId: number
  matchUser;
  isHidden;
  nameWidth: string;

  constructor(
    private translatePage: TranslateService,
    private getProfileAPI: ProfileService,
    private emitterMatchId: ChatAndMatchesService,
    private readonly breakpointObserver: BreakpointObserver,
    private profileAPI: GetProfileService,
    public dialog: MatDialog,

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
  openProfile(userId): void {
    this.profileAPI.getProfileInfos(userId);
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
  ngOnInit(): void {
    this.translatePage.veriyLanguage();
    this.text = this.translatePage.textTranslate;
    this.getInfosMatch();
  }
  getInfosMatch(): void{
    this.emitterMatchId.emitterMatchIdClick.subscribe(clickedInfos => {
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
