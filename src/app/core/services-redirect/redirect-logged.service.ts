import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { LoadingSpinnerService } from '../loading-spinner.service';

@Injectable({
  providedIn: 'root'
})
export class RedirectLoggedService {
  private loginAutenticated = false;
  constructor(
    private router: Router,
    private loadingSpinner: LoadingSpinnerService,
    ) { }
  loggedRedirect(loggedInvalid, navigate): void {
    if (loggedInvalid) {
      this.loginAutenticated = true;
      this.router.navigate([navigate]);
      this.loadingSpinner.ShowLoading = false;
    }else {
      this.router.navigate([navigate]);
      this.loginAutenticated = false;
    }
  }
  loginIsAuthenticated(): boolean {
    return this.loginAutenticated;
  }
}
