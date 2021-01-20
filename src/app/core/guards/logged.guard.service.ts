import { RedirectLoggedService } from './../services-redirect/redirect-logged.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class LoggedGuardService implements CanActivate {
  constructor(private logged: RedirectLoggedService, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<boolean> | boolean {
      if (this.logged.loginIsAuthenticated()){
        return true;
      }
      // this.router.navigate(['/login']);
      return true;
    }
}
