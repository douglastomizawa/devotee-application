import { Injectable } from '@angular/core';
import { RecommendationsService } from './recommendations.service';

@Injectable({
  providedIn: 'root'
})
export class SplitMatchesService {
  matchUser;
  matchUserSplited;
  initialSlice: number;
  finalSlice: number;
  constructor(
    private matchesList: RecommendationsService,
    ) { }

    getMatches(): void {
      this.matchesList.get(6821).toPromise().then( res => {
        let response = {finishPromise: true, listMacthes: res};
        this.matchUser = response;
        this.splitMatches();
        // this.matchUser = res;
      });
    }
    splitMatches(): void {
      this.matchUserSplited = this.matchUser['listMacthes'].slice(0, 3);
      this.initialSlice = 0;
      this.finalSlice = 3;
    }
    addMoreMatch(){
      this.initialSlice = this.initialSlice + 1;
      this.finalSlice = this.finalSlice + 1;
      this.matchUserSplited = this.matchUser['listMacthes'].slice(this.initialSlice,  this.finalSlice);
    }
}
