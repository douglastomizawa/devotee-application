import { LoggedInUserIdService } from './logged-in-user-id.service';
import { Injectable } from '@angular/core';
import { RecommendationsService } from './recommendations.service';

@Injectable({
  providedIn: 'root'
})
export class SplitMatchesService {
  /* tslint:disable:no-string-literal */
  matchUser;
  matchUserSplited;
  initialSlice: number;
  finalSlice: number;
  private idUser: number;
  constructor(
    private matchesList: RecommendationsService,
    private userId: LoggedInUserIdService
    ) { }
   getUserId(): void  {
      this.idUser = this.userId.idUser;
    }
    getMatches(): void {
      this.getUserId();
      this.matchUser = {finishPromise: false, listMacthes: {}};
      this.matchesList.get(this.idUser).toPromise().then( res => {
        this.matchUser = {finishPromise: true, listMacthes: res};
        this.splitMatches();
      });
    }
    splitMatches(): void {
      this.matchUserSplited = this.matchUser['listMacthes'].slice(0, 3);
      this.initialSlice = 0;
      this.finalSlice = 3;
    }
    addMoreMatch(): void {
      this.initialSlice = this.initialSlice + 1;
      this.finalSlice = this.finalSlice + 1;
      this.matchUserSplited = this.matchUser['listMacthes'].slice(this.initialSlice,  this.finalSlice);
    }

}
