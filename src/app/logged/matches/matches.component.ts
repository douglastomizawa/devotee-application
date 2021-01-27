import { ChatAndMatchesService } from './../../core/services/chat-and-matches.service';
// import { ChatModule } from './../chat/chat.module';
import { ChatComponent } from './../chat/chat.component';
import { ProfileService } from './../../core/services/profile.service';
import { LoggedInUserIdService } from './../../core/services/logged-in-user-id.service';
import { MatchesService } from './../../core/services/matches.service';
import { TranslateService } from './../../shared/translate.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit {
  // matches:any = [];
  text;
  matches: any;
  constructor(
    private translatePage: TranslateService,
    private getMatchesAPI: MatchesService,
    private getId: LoggedInUserIdService,
    private emitterMatchId: ChatAndMatchesService,
  ) { }

  ngOnInit(): void {
    this.translatePage.veriyLanguage();
    this.text = this.translatePage.textTranslate;
    this.getMatches();
  }
  clickGetIdMatch(matchId): void {
    this.emitterMatchId.clickToEmitterMatchId(matchId, false);
  }
  getMatches(): void {
    // this.getMatchesAPI.get(this.getId.idUser).subscribe(res =>{
    this.getMatchesAPI.get(this.getId.idUser).subscribe(res =>{
      this.matches = res;
    })
  }
}
