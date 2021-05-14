import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RedirectCreateContinueService {
  private formAuthenticated = false;
  constructor(private router: Router) { }
  createAccountContinueRedirect(formInvalid): void {
    if (!formInvalid) {
      this.formAuthenticated = true;
      this.router.navigate(['/edit-profile']);
    }else {
      this.formAuthenticated = false;
    }

  }
  formIsAuthenticated(): boolean {
    return this.formAuthenticated;
  }
}
