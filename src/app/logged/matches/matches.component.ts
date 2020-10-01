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
  constructor(
    private splitMatches: SplitMatchesService,
    ) { }

  ngOnInit(): void {
    this.matchUser = this.splitMatches.matchUserSplited;
  }
  dragCard(e): void {
    console.log(e);
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
