import { Router } from '@angular/router';
import { Injectable, EventEmitter } from '@angular/core';
import { LoadingSpinnerService } from '../loading-spinner.service';

@Injectable({
  providedIn: 'root'
})
export class RedirectLoggedService {
  private loginAutenticated = false;
  logout = new EventEmitter();
  constructor(
    private router: Router,
    private loadingSpinner: LoadingSpinnerService,
    ) { }
  loggedRedirect(loggedInvalid, navigate): void {
    if (loggedInvalid) {
      this.loginAutenticated = true;
      this.router.navigate([navigate]);
      this.loadingSpinner.ShowLoading = false;
      this.logout.emit(true);
    }else {
      this.router.navigate([navigate]);
      this.loginAutenticated = false;
      this.logout.emit(false);
    }
  }
  loginIsAuthenticated(): boolean {
    return this.loginAutenticated;
  }
}
