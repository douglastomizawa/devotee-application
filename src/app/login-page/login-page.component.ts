import { LoginPageService } from './login-page.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss','../app.component.scss']
})
export class LoginPageComponent implements OnInit {
  sub;
  constructor(private loginPageService: LoginPageService, private route: ActivatedRoute) { }
  veriyLanguage(){
    console.log(this.loginPageService.getDataTranslate());
  }

  ngOnInit(): void {
    this.veriyLanguage();
    this.sub = this.route
    .data
    .subscribe(v => console.log(v));
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
