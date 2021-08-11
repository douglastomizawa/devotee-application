import { ReplaySubject, Subject } from 'rxjs';
import { State, Store } from '@ngrx/store';
import { LoadingSpinnerService } from './../core/loading-spinner.service';
import { Router } from '@angular/router';
import { RedirectMatchesService } from './../core/services-redirect/click-matches.service';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from './../shared/translate.service';
import { ProfileService } from '../core/services/profile.service';
import { IAppState } from '../store/app.model';
import { takeUntil } from 'rxjs/operators';
import { IProfileDataState } from '../store/user-data/user-data.model';
import { setUserDataLogged } from '../store/user-data/user-data.actions';

@Component({
  selector: 'app-logged',
  templateUrl: './logged.component.html',
  styleUrls: ['./logged.component.scss']
})
export class LoggedComponent implements OnInit {
  text;
  routerUrl;
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  constructor(
    private translatePage: TranslateService,
    private redirectMatches: RedirectMatchesService,
    private router: Router,
    private profileService: ProfileService,
    private store: Store,
    private state: State<IAppState>,
    ) { }

  ngOnInit(): void {
    this.translatePage.veriyLanguage();
    this.text = this.translatePage.textTranslate;
    this.profileService.get(this.state.getValue().loginUserData.id)
      .pipe(takeUntil(this.destroyed$))
      .subscribe((profileData: IProfileDataState)=> {
        this.store.dispatch(setUserDataLogged({profileData}))
      })
  }
  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
  redirectToMacthes(): void {
    this.redirectMatches.redirectToMacthes();
    const intervalUrl = setInterval(() => {
     if ( this.router.url === '/matches') {
       this.routerUrl = true;
      } else {
        this.routerUrl = false;
      }
    }, 10 );
  }
}
