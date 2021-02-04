import { PhoneNumberService } from './../../core/services/profile-infos/phone-number.service';
import { RedirectLoggedService } from './../../core/services-redirect/redirect-logged.service';
import { map } from 'rxjs/operators';
import { BreakpointState, BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { DialogData } from './../../footer/footer.component';

import { GetProfileService } from './../../core/services/get-profile.service';
import { DeslikeApiService } from './../../core/services/deslike-api.service';
import { LoggedInUserIdService } from './../../core/services/logged-in-user-id.service';
import { LikeApiService } from './../../core/services/like-api.service';
import { TranslateService } from './../../shared/translate.service';
import { PerfilLikesService } from '../../core/services/perfil-likes.service';
import { SplitMatchesService } from '../../core/services/split-matches.service';

@Component({
  selector: 'app-matches',
  templateUrl: './sugestion-matches.component.html',
  styleUrls: ['./sugestion-matches.component.scss']
})
export class SugestionMatchesComponent implements OnInit {
  /* tslint:disable:no-string-literal */
  text;
  matchUser;
  active = false;
  currentX;
  currentY;
  initialX;
  initialY;
  likePosition;
  deslikePosition;
  xOffset: number = 0;
  yOffset: number = 0;
  femaleLike;
  maleLike;
  anotherLike;
  likeDeslikeInterface: LikeDeslike = new LikeDeslike();

  constructor(
    private splitMatches: SplitMatchesService,
    private perfilLikes: PerfilLikesService,
    private loggedUserId: LoggedInUserIdService,
    private translatePage: TranslateService,
    private likeApi: LikeApiService,
    private deslikeApi: DeslikeApiService,
    private userId: LoggedInUserIdService,
    public dialog: MatDialog,
    private profileAPI: GetProfileService,
    private redirectLoggedService: RedirectLoggedService,

    private readonly breakpointObserver: BreakpointObserver,
    ) {
    }
    isExtraSmall: Observable<BreakpointState> = this.breakpointObserver.observe(
      Breakpoints.XSmall
    );
  ngOnInit(): void {
    this.matchUser = this.splitMatches.matchUserSplited;
    console.log(this.matchUser);
    this.dragCard();
    this.exhibitionPerfilLikes();
    this.translatePage.veriyLanguage();
    this.text = this.translatePage.textTranslate;
    this.execDragSplitSugestions();
  }
  dragCard(): void {
    const container = document.querySelector('#container-drag');
    container.addEventListener('touchstart', this.dragStart, false);
    container.addEventListener('touchend', this.dragEnd, false);
    container.addEventListener('touchmove', this.drag, false);

    container.addEventListener('mousedown', this.dragStart, false);
    container.addEventListener('mouseup', this.dragEnd, false);
    container.addEventListener('mousemove', this.drag, false);
    // elm.style.transform = `translate3d(${pos1}px, ${pos2}px, 20px)`;
  }
  dragStart(e): void {
    const dragItem: any = document.querySelectorAll('mat-card')[0];
    const imgDragItem: any = document.querySelectorAll('.container-sugestion-perfil')[0];
    const nameProfileDrag: any = document.querySelectorAll('.profile-img')[0];
    if (e.type === 'touchstart') {
      this.initialX = e.touches[0].clientX;
      this.initialY = e.touches[0].clientY;
    } else {
      this.initialX = e.clientX;
      this.initialY = e.clientY;
    }
    if (e.target === dragItem || e.target === imgDragItem || e.target === nameProfileDrag ) {
      this.active = true;
    }
  }
  dragEnd(e): any {
    const dragItem: any = document.querySelectorAll('mat-card')[0];
    this.initialX =  this.initialX - this.currentX;
    this.initialY =  this.initialY - this.currentY;
    dragItem.style.transform = `translate3d(0px, 0px, 0)`;
    this.active = false;
  }
  addSugestionAndAttribute(): void {
    const dragItem: any = document.querySelectorAll('mat-card')[0];
    setTimeout (() => {
      this.addMoreMatch();
      dragItem.setAttribute('data-position', 0 );
    }, 800);
  }
  dragExecLikeAddMore(): any {
    this.addSugestionAndAttribute();
    this.dataLikeDislike();
    this.like();
    this.buttonDisabled('remove');
  }
  dragExecDislikeAddMore(): any {
    this.addSugestionAndAttribute();
    this.dataLikeDislike();
    this.deslike();
    this.buttonDisabled('remove');
  }
  execDragSplitSugestions(): void {
    const dragItemInterval = setInterval(() => {
      const dragItem: any = document.querySelectorAll('mat-card')[0];
      const dragDataPosition: any = dragItem.getAttribute('data-position');
      dragDataPosition === '150' ? this.dragExecLikeAddMore() : dragItem.setAttribute('data-position', 0 );
      dragDataPosition === '-150' ? this.dragExecDislikeAddMore() :  dragItem.setAttribute('data-position', 0 );
    }, 1000);
    this.redirectLoggedService.logout.subscribe(res => {
      res ? '' : clearInterval(dragItemInterval);
    });
  }
  drag(e): void {
    if (this.active) {
      const dragItem: any = document.querySelectorAll('mat-card')[0];
      const buttons = document.querySelectorAll('.matches-buttons');
      e.preventDefault();
      if (e.type === 'touchmove') {
        this.currentX = e.touches[0].clientX - this.initialX;
        this.currentY = e.touches[0].clientY - this.initialY;
      } else {
        this.currentX = e.clientX - this.initialX;
        this.currentY = e.clientY - this.initialY;
      }
      if (this.currentX >= 150 && this.currentX <= 160){
        dragItem.setAttribute('data-position', 150 );
        dragItem.classList.add('like-animation');
        buttons.forEach((value) => {value.setAttribute('disabled', 'true'); });
      }
      if (this.currentX <= -150 && this.currentX >= -160) {
        dragItem.setAttribute('data-position', -150 );
        dragItem.classList.add('dislike-animation');
        buttons.forEach((value) => {value.removeAttribute('disabled'); });

      }
      this.xOffset = this.currentX;
      this.yOffset = this.currentY;
      dragItem.style.transform = `rotate(${this.currentX / 10}deg) translate3d(${this.currentX}px, ${ this.currentY}px, 0)`;

    }
  }
  addClassAnimation(likeOrDeslike): void {
    const addAnimation: any = document.querySelectorAll('mat-card')[0];
    likeOrDeslike === 'like' ?
      addAnimation.classList.add('like-animation') :
      addAnimation.classList.add('dislike-animation');
  }
  transitionOptionMatch(likeOrDeslike): Promise<boolean>{
    return new Promise((resolve: any, reject: any) => {
      this.addClassAnimation(likeOrDeslike);
      this.buttonDisabled('add');
      setInterval(() => {
        resolve(true);
      }, 1000);
    });
  }
  buttonDisabled(addOrRemove): void {
    const buttons = document.querySelectorAll('.matches-buttons');
    addOrRemove === 'add' ?
      buttons.forEach((value) => {value.setAttribute('disabled', 'true'); }) :
      buttons.forEach((value) => {value.removeAttribute('disabled'); });
  }
  dataLikeDislike(): any {
    this.likeDeslikeInterface.user_id = this.userId.idUser;
    this.likeDeslikeInterface.receive_id = this.matchUser[0].id;
    console.log(this.matchUser[0].id);
  }
  execAddMoreMatchAndTransition(likeOrDeslike): void {
    this.transitionOptionMatch(likeOrDeslike).then((res: boolean) => {
      if (res) {
        this.dataLikeDislike();
        likeOrDeslike === 'like' ? this.like() : '';
        likeOrDeslike === 'deslike' ? this.deslike() : '';
        this.buttonDisabled('remove');
        this.addMoreMatch();
      }
    });
  }
  addMoreMatch(): void {
    this.splitMatches.addMoreMatch();
    console.log(this.splitMatches.matchUserSplited);
    this.matchUser = this.splitMatches.matchUserSplited;

  }
  exhibitionPerfilLikes(): any {
    const female = new Array();
    const male = [];
    const another = [];
    this.perfilLikes.get(this.loggedUserId.idUser).toPromise().then(res => {
      res.data.forEach(element => {
        switch (element.gender) {
          case 'female':
            female.push(element.gender);

            // likesProfile.female = female.length;
            break;
          case 'male':
            male.push(element.gender);
            // likesProfile.female = female.length;
              break;
          default:
            another.push(element.gender);
            // likesProfile.female = female.length;
            break;
        }

      });
      this.femaleLike = female.length;
      this.maleLike = male.length;
      this.anotherLike = another.length;
    });

  }
  openProfile(userId): void {
    this.profileAPI.getProfileInfos(userId);
    this.profileAPI.profile.subscribe(res => {
      this.openProfileModal();
    });
  }
  openProfileModal(): void {
    const d = this.dialog.open(DialogProfileComponent, {
      width: 'calc(100% - 50px)',
      maxWidth: '100vw',
      panelClass: 'container-profile'
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
  like(): any{
    this.likeApi.post(this.likeDeslikeInterface).toPromise().then(res => {
    });
  }
  deslike(): any{
    this.deslikeApi.post(this.likeDeslikeInterface).toPromise().then(res => {
    });
  }
}
export class LikeDeslike {
  user_id: number;
  receive_id: number;
}
@Component({
  selector: 'app-profile-component',
  templateUrl: 'profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class DialogProfileComponent implements OnInit {
  text;
  profileInfos;
  profileFirstName;
  userProfileInfos;
  userAge: number;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public dialogRef: MatDialogRef<DialogProfileComponent>,
    private profileAPI: GetProfileService,
    private translatePage: TranslateService,
    private phoneNumberAPI: PhoneNumberService,
    private userId: LoggedInUserIdService,
  ) {}
  ngOnInit(): any {
    console.log('d')
    this.getProfile();
    this.text = this.translatePage.textTranslate;
  }
  removeSpacesString(stringText): any {
    this.profileFirstName =  stringText.trim();
  }
  getProfile(): any {
    this.userProfileInfos = this.profileAPI.profileUser;
    this.profileInfos = this.userProfileInfos;
    console.log(this.userProfileInfos);
    this.transformeAge();
    this.removeSpacesString(this.userProfileInfos.user.first_name);
    // this.getPhoneNumber();
  }
  transformeAge(): any {
    const birthdateSplit = this.userProfileInfos.user.birthdate.split('-');
    console.log(birthdateSplit);
    const d = new Date();
    const currentYear = d.getFullYear();
    const currentMonth = d.getMonth() + 1;
    const currentDay = d.getDate();
    const yearAnniversary = +birthdateSplit[0];
    const monthAnniversary = +birthdateSplit[1];
    const dayAnniversary = +birthdateSplit[2];
    let howOld: number = currentYear - yearAnniversary;
    if (currentMonth < monthAnniversary || currentMonth == monthAnniversary && currentDay < dayAnniversary) {
        howOld--;
    }
    this.userAge =  howOld < 0 ? 0 : howOld;
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  getPhoneNumber() {
    //this.userId.idUser
    this.phoneNumberAPI.get(this.userId.idUser).toPromise().then(res => {
      console.log(res);
    })
  }
}
