import { ProfileService } from './../../core/services/profile.service';
import { ChatAndMatchesService } from './../../core/services/chat-and-matches.service';
import { TranslateService } from 'src/app/shared/translate.service';
import { Component, OnInit } from '@angular/core';

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
  constructor(
    private translatePage: TranslateService,
    private getProfileAPI: ProfileService,
    private emitterMatchId: ChatAndMatchesService,

  ) { }

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
