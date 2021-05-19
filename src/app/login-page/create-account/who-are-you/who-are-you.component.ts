import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserFactory } from 'src/app/core/factory/user.factory.service';
import { TranslateService } from './../../../shared/translate.service';

@Component({
  selector: 'app-who-are-you',
  templateUrl: './who-are-you.component.html',
  styleUrls: ['./who-are-you.component.scss']
})
export class WhoAreYouComponent implements OnInit {

  constructor(
    private translatePage: TranslateService,
    private user: UserFactory,
    private router: Router) { }
  text;
  click(valor: string): void{
    if (valor === 'devotee') {
      this.incrementDataUser(valor);
      this.router.navigate(['/register']);
    }else {
      this.incrementDataUser(valor);
      this.router.navigate(['/register']);
    }
    console.log(this.user.newUser);
  }
  incrementDataUser(value: string) {
    let dataUser = this.user.newUser;
    dataUser['user_type'] = value;
    this.user.userSessionFirst(dataUser);
  }
  ngOnInit(): void {
    console.log(this.user.newUser)
    this.translatePage.veriyLanguage();
    this.text = this.translatePage.textTranslate;
  }
}
