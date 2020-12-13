import { SplitMatchesService } from './../../core/services/split-matches.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit {
  /* tslint:disable:no-string-literal */
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
  constructor(
    private splitMatches: SplitMatchesService,
    ) {
    }

  ngOnInit(): void {
    this.matchUser = this.splitMatches.matchUserSplited;
    this.dragCard();
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
  execDragSplitSugestions(): void {
    const dragItem: any = document.querySelectorAll('mat-card')[0];
    const dragDataPosition: any = dragItem.getAttribute('data-position');
    dragDataPosition === '150' ? this.addSugestionAndAttribute() : dragItem.setAttribute('data-position', 0 );
    dragDataPosition === '-150' ? this.addSugestionAndAttribute() :  dragItem.setAttribute('data-position', 0 );
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
      if (this.currentX >= 150){
        dragItem.setAttribute('data-position', 150 );
        dragItem.classList.add('like-animation');
        buttons.forEach((value) => {value.setAttribute('disabled', 'true'); });
      }
      if (this.currentX <= -150) {
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
      }, 1500);
    });
  }
  buttonDisabled(addOrRemove): void {
    const buttons = document.querySelectorAll('.matches-buttons');
    addOrRemove === 'add' ?
      buttons.forEach((value) => {value.setAttribute('disabled', 'true'); }) :
      buttons.forEach((value) => {value.removeAttribute('disabled'); });
  }
  execAddMoreMatchAndTransition(likeOrDeslike): void {
    this.transitionOptionMatch(likeOrDeslike).then((res: boolean) => {
      if (res) {
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
}
