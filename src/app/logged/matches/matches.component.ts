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
  matches: any;
  constructor(
    private translatePage: TranslateService,
    private getMatchesAPI: MatchesService,
    private getId: LoggedInUserIdService,
  ) { }

  ngOnInit(): void {
    this.translatePage.veriyLanguage();
    this.getMatches();
  }
  getMatches(): void {
    this.getMatchesAPI.get(this.getId.idUser).subscribe(res =>{
      this.matches = res;
    })
  }
}
