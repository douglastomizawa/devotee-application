import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { SplitMatchesService } from 'src/app/core/services/split-matches.service';

@Injectable({
  providedIn: 'root'
})
export class LoadingSpinnerService {
  ShowLoading = false;
  constructor(
    private splitMatches: SplitMatchesService,
    private router: Router,
    ) { }
  selectIsReady(): Promise<void> {
    return new Promise ((resolve: any, reject: any) => {
      setInterval((): void => {
        if (this.splitMatches.matchUser['finishPromise']) {
          const resolvePromise = this.splitMatches.matchUser['finishPromise'];
          resolvePromise !== undefined ? resolve(resolvePromise) : reject(false);
        }
     }, 200);
    });
  }
  loadingSpinner(url): Promise<void>{
    return new Promise ((resolve: any, reject: any) => {
      this.ShowLoading = true;
      this.splitMatches.getMatches();
      this.selectIsReady().then( (ressponse: void)  => {
        ressponse !== null ? resolve(true) : reject(false);
      });
    });
  }
}
