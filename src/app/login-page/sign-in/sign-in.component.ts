import { LoggedInUserIdService } from './../../core/services/logged-in-user-id.service';
import { RedirectLoggedService } from './../../core/services-redirect/redirect-logged.service';
import { LoadingSpinnerService } from './../../core/loading-spinner.service';
import { LoginService } from './../../core/services/login.service';
import { TranslateService } from './../../shared/translate.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { SplitMatchesService } from 'src/app/core/services/split-matches.service';
import { Router } from '@angular/router';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}



@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  /* tslint:disable:no-string-literal */

  hide = true;
  text;
  loginGroup: FormGroup;
  loginUser: Login = new Login();
  resError = false;
  constructor(
    private translatePage: TranslateService,
    private login: LoginService,
    private formBuilder: FormBuilder,
    private loadingSpinnerC: LoadingSpinnerService,
    private splitMatches: SplitMatchesService,
    private userId: LoggedInUserIdService,
    private redirectLogged: RedirectLoggedService,

    ) {}
  matcher = new MyErrorStateMatcher();
  get f() { return this.loginGroup.controls;}
  ngOnInit(): void {
    this.text = this.translatePage.textTranslate;
    this.createForm();
  }
  loginLoad(): void {
    this.loadingSpinnerC.loadingSpinner().then((res: any) => {
      res ? this.redirectLogged.loggedRedirect(res, '/matches') : this.resError = true;
    });
  }
  createForm( ): void {
      this.loginGroup = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]]
      });
  }
  onSubmit(): void {
    this.login.post(this.loginUser).toPromise().then((res) => {
      if (!res['status']) {
        this.resError = true;
      }else{
        this.userId.returnIdUser(res['id']);
        this.loginLoad();
      }
    })
  }
}
export class Login {
  email: string;
  password: string;
}
