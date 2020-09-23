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
  addMoreMatch( ){
    this.splitMatches.addMoreMatch();
    console.log(this.splitMatches.matchUserSplited);
    this.matchUser = this.splitMatches.matchUserSplited;
  }
}
