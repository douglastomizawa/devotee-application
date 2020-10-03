import { RedirectLoggedService } from './../../core/services-redirect/redirect-logged.service';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'src/app/shared/translate.service';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent implements OnInit {
  text;
  constructor(
    private translatePage: TranslateService,
    private location: Location,
    private redirectLoggedService: RedirectLoggedService,
  ) { }
  logout(): void{
    this.redirectLoggedService.loggedRedirect(false);
  }
  ngOnInit(): void {
    this.text = this.translatePage;
  }
  return(): void {
    this.location.back();
  }
}
