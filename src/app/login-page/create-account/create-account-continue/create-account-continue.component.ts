import { Component, OnInit } from '@angular/core';
import { TranslateService } from './../../../shared/translate.service';

@Component({
  selector: 'app-create-account-continue',
  templateUrl: './create-account-continue.component.html',
  styleUrls: ['./create-account-continue.component.scss']
})
export class CreateAccountContinueComponent implements OnInit {
  constructor(private translatePage: TranslateService) { }
  text;
  click(valor){
    console.log(valor);
  }
  ngOnInit(): void {
    this.translatePage.veriyLanguage();
    this.text = this.translatePage.textTranslate;
  }
}
