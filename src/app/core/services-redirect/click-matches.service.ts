import { LoadingSpinnerService } from './../loading-spinner.service';
import { LoggedInUserIdService } from './../services/logged-in-user-id.service';
import { MatchesService } from './../services/matches.service';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RedirectMatchesService {
  matches: string[];
  routerUrl: string;
  constructor(
    private router: Router,
    private getMatchesAPI: MatchesService,
    private getId: LoggedInUserIdService,
    private loadingSpinnerC: LoadingSpinnerService,
  ) { }

  redirectToMacthes(): void {
    this.loadingSpinnerC.loadingSpinner();
    this.getMatchesAPI.get(this.getId.idUser).subscribe(res => {
      this.matches = res;
      this.router.navigate(['/matches']);
      this.loadingSpinnerC.ShowLoading = false;
      this.routerUrl = this.router.url;
    });
  }
}
