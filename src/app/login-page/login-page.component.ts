import { LoginPageService } from './login-page.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss','../app.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private loginPageService: LoginPageService) { }
  veriyLanguage(){
    console.log(this.loginPageService.getDataTranslate())
  }
  ngOnInit(): void {
    this.veriyLanguage()
  }

}
