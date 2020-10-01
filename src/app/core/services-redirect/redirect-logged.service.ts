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
  loggedRedirect(loggedInvalid): void {
    if (loggedInvalid) {
      this.loginAutenticated = true;
      this.router.navigate(['/matches']);
      this.loadingSpinner.ShowLoading = false;
    }else {
      this.loginAutenticated = false;
    }
  }
  loginIsAuthenticated(): boolean {
    return this.loginAutenticated;
  }
}
