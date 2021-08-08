import { TranslateService } from 'src/app/shared/translate.service';
import { Component, OnInit } from '@angular/core';
import { RedirectCreateContinueService } from './core/services-redirect/redirect-create-continue.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Devotee';
  constructor(private translatePage:TranslateService) {

  }
  ngOnInit() {
    this.translatePage.veriyLanguage();
  }
}
