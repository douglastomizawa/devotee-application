import { MatchesService } from './../../core/services/matches.service';
import { TranslateService } from './../../shared/translate.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit {
  matches : any;
  constructor(
    private translatePage: TranslateService,
    private getMatchesAPI: MatchesService
  ) { }

  ngOnInit(): void {
    this.translatePage.veriyLanguage();
    this.getMatches()
  }
  getMatches(){
    console.log('teste')
    this.getMatchesAPI.get('2860').subscribe(res =>{
      this.matches = res
    })
  }
}
