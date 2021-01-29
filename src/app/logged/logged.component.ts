import { LoadingSpinnerService } from './../core/loading-spinner.service';
import { Router } from '@angular/router';
import { RedirectMatchesService } from './../core/services-redirect/click-matches.service';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from './../shared/translate.service';

@Component({
  selector: 'app-logged',
  templateUrl: './logged.component.html',
  styleUrls: ['./logged.component.scss']
})
export class LoggedComponent implements OnInit {
  text;
  routerUrl;
  constructor(
    private translatePage: TranslateService,
    private redirectMatches: RedirectMatchesService,
    private router: Router,
    private loadingSpinnerC: LoadingSpinnerService,
    ) { }

  ngOnInit(): void {
    this.translatePage.veriyLanguage();
    this.text = this.translatePage.textTranslate;
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
