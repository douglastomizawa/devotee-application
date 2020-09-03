import { TranslateService } from '../shared/translate.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss','../app.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private translatePage: TranslateService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.translatePage.veriyLanguage();

  }
  ngOnDestroy() {

  }
}
