import { IAppState } from 'src/app/store/app.model';
import { State, Store } from '@ngrx/store';
import { RedirectMatchesService } from './../../core/services-redirect/click-matches.service';
import { ChatAndMatchesService } from './../../core/services/chat-and-matches.service';
import { TranslateService } from './../../shared/translate.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit {
  text;
  matches: any;
  constructor(
    private translatePage: TranslateService,
    private emitterMatchId: ChatAndMatchesService,
    private matchesServices: RedirectMatchesService,
    private store: Store,
    private state: State<IAppState>,
  ) { }

  ngOnInit(): void {
    this.translatePage.veriyLanguage();
    this.text = this.translatePage.textTranslate;
    this.getMatches();
  }
  clickGetIdMatch(matchId): any {
    this.emitterMatchId.clickToEmitterMatchId(matchId, false);
  }
  getMatches(): void {
    this.matches = this.matchesServices.matches;
  }
}
