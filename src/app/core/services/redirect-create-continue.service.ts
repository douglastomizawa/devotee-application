import { Router } from '@angular/router';
import { EventEmitter, Injectable } from '@angular/core';
import { User } from '../model/client.model';

@Injectable({
  providedIn: 'root'
})
export class RedirectCreateContinueService {
  private formAuthenticated: boolean = false;
  constructor(private router: Router) { }
  createAccountContinueRedirect(formInvalid): void {
    if (!formInvalid) {
      this.formAuthenticated = true;
      this.router.navigate(['/create-continue']);
    }else {
      this.formAuthenticated = false;
    }

  }
  formIsAuthenticated() {
    return this.formAuthenticated;
  }
}
