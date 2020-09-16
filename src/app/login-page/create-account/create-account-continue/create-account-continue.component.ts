import { User } from './../../../core/model/client.model';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from './../../../shared/translate.service';
import { UserFactory } from 'src/app/core/factory/user.factory.service';

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
