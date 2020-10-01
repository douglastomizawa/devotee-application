import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { RedirectCreateContinueService } from '../services-redirect/redirect-create-continue.service';

@Injectable()
export class AuthGuardService implements CanActivate       {

  constructor(private authForm: RedirectCreateContinueService, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<boolean> | boolean {
      if (this.authForm.formIsAuthenticated()){
        return true;
      }
      // this.router.navigate(['/login']);
      return true;
    }
}
