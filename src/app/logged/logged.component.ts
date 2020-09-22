import { Component, OnInit } from '@angular/core';
import { TranslateService } from './../shared/translate.service';

@Component({
  selector: 'app-logged',
  templateUrl: './logged.component.html',
  styleUrls: ['./logged.component.scss']
})
export class LoggedComponent implements OnInit {
  text;
  constructor(private translatePage: TranslateService) { }

  ngOnInit(): void {
    this.translatePage.veriyLanguage();
    this.text = this.translatePage.textTranslate;
  }

}
