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
    let container = document.querySelector('#container-drag');
    container.addEventListener('touchstart', this.dragStart, false);
    container.addEventListener('touchend', this.dragEnd, false);
    container.addEventListener('touchmove', this.drag, false);

    container.addEventListener('mousedown', this.dragStart, false);
    container.addEventListener('mouseup', this.dragEnd, false);
    container.addEventListener('mousemove', this.drag, false);
    // elm.style.transform = `translate3d(${pos1}px, ${pos2}px, 20px)`;
  }
  dragStart(e): any {
    let dragItem: any = document.querySelectorAll('mat-card')[0];
    let imgDragItem: any = document.querySelectorAll('.container-sugestion-perfil')[0];
    let nameProfileDrag: any = document.querySelectorAll('.profile-img')[0];
    if (e.type === 'touchstart') {
      this.initialX = e.touches[0].clientX;
      this.initialY = e.touches[0].clientY;
    } else {
      console.log(e.clientX , this.xOffset);
      this.initialX = e.clientX;
      this.initialY = e.clientY;
    }
    if (e.target === dragItem || e.target === imgDragItem || e.target === nameProfileDrag ) {
      this.active = true;
    }
  }
  dragEnd(e): any {
    let dragItem: any = document.querySelectorAll('mat-card')[0];
    this.initialX =  this.initialX - this.currentX;
    this.initialY =  this.initialY - this.currentY;
    dragItem.style.transform = `translate3d(0px, 0px, 0)`;
    // dragItem.style.removeAttribute('transform');
    this.active = false;
  }
  drag(e): void {
    if (this.active) {
      let dragItem: any = document.querySelectorAll('mat-card')[0];
      e.preventDefault();
      if (e.type === 'touchmove') {
        this.currentX = e.touches[0].clientX - this.initialX;
        this.currentY = e.touches[0].clientY - this.initialY;
      } else {
        this.currentX = e.clientX - this.initialX;
        this.currentY = e.clientY - this.initialY;
      }

      this.xOffset = this.currentX;
      this.yOffset = this.currentY;
      console.log(dragItem, this.currentX,  this.currentY);
      if (this.currentX === 150 ){
        console.log('like');
        this.addMoreMatch('like');
      }
      if (this.currentX === -250) {
        console.log('dislike');
        this.addMoreMatch('dislike');
      }
      dragItem.style.transform = `rotate(${this.currentX / 10}deg) translate3d(${this.currentX}px, ${ this.currentY}px, 0)`;
    }
  }
  transitionOptionMatch(likeOrDeslike): Promise<boolean>{
    return new Promise((resolve: any, reject: any) => {
      const buttons = document.querySelectorAll('.matches-buttons');

      if (likeOrDeslike === 'like') {
        document.querySelectorAll('mat-card')[0].classList.add('like-animation');
      }else {
        document.querySelectorAll('mat-card')[0].classList.add('dislike-animation');
      }
      buttons.forEach((value) => {
        value.setAttribute('disabled', 'true');
      });
      setInterval(() => {
        resolve(true);
      }, 1500);
    });
  }
  addMoreMatch(likeOrDeslike): void {
    this.transitionOptionMatch(likeOrDeslike).then((res: boolean) => {
      if (res) {
        console.log('eita');
        const buttons = document.querySelectorAll('.matches-buttons');
        buttons.forEach((value) => {
          value.removeAttribute('disabled');
        });
        this.splitMatches.addMoreMatch();
        console.log(this.splitMatches.matchUserSplited);
        this.matchUser = this.splitMatches.matchUserSplited;
      }
    });
    // this.splitMatches.addMoreMatch();
    // console.log(this.splitMatches.matchUserSplited);
    // this.matchUser = this.splitMatches.matchUserSplited;
    // this.transitionOptionMatch();
  }
}
