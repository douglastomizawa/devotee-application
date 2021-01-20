import { Location } from '@angular/common';
import { RedirectLoggedService } from './../services-redirect/redirect-logged.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class BlockInitialPageService implements CanActivate {
  constructor(private logged: RedirectLoggedService, private router: Router, private location: Location) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<boolean> | boolean {
      if (!this.logged.loginIsAuthenticated()){
        return true;
      }
      // this.location.back();
      this.router.navigate(['/sugestion-matches']);
      return false;
    }
}
