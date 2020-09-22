import { RecommendationsService } from './../../core/services/recommendations.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit {
  matchUser;
  constructor(private matchesList: RecommendationsService) { }

  ngOnInit(): void {
    this.matchesList.get(6821).toPromise().then( res => {
      console.log(res);
      this.matchUser = res;
    })
  }

}
