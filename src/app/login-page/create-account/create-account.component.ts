import { UserFactory } from './../../core/factory/user.factory.service';
import { RedirectCreateContinueService } from './../../core/services-redirect/redirect-create-continue.service';
import { Router } from '@angular/router';
import { TabsFooterTermsComponent } from './../../footer/footer-modal.component';
import { FooterComponent } from './../../footer/footer.component';
import { TranslateService } from './../../shared/translate.service';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder} from '@angular/forms';
import {ErrorStateMatcher, ThemePalette } from '@angular/material/core';

import { User } from '../../core/model/client.model';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted || invalidCtrl || invalidParent));
  }
}
@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})

export class CreateAccountComponent implements OnInit {
  hide = true;
  text;
  user: User = new User();
  registerForm: FormGroup;
  submitted = false;
  minDate: Date;
  maxDate: Date;
  color: ThemePalette = 'primary';
// tslint:disable-next-line:max-line-length
  constructor(
    private translatePage: TranslateService,
    private dialog: FooterComponent,
    private formBuilder: FormBuilder,
    public footerTabs: TabsFooterTermsComponent,
    private redirectCreateContinueService: RedirectCreateContinueService,
    private userfactory: UserFactory
    ) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 100);
    this.maxDate = new Date(currentYear - 18, new Date().getMonth() , new Date().getDate());
   }
  ngOnInit(): void {
    this.translatePage.veriyLanguage();
    this.text = this.translatePage.textTranslate;
    this.createForm();
  }
  execClickTabsShow(name: any): void{
    this.footerTabs.execClickTabs(name);
  }
  createForm( ): void {
    this.registerForm = this.formBuilder.group({
          name: ['', [Validators.required]],
          birthdate: ['', [Validators.required]],
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]],
          repeatPassword: ['', [Validators.required, Validators.minLength(6)]],
          check: ['', [Validators.required]]
        }, {validator: this.checkPasswords });
  }
  checkPasswords(input: FormControl) { // here we have the 'passwords' group
    const pass: any = input.value.password;
    const confirmPass: any = input.value.repeatPassword;
    return pass === confirmPass ? null : { notSame: true };
  }
  get f() { return this.registerForm.controls; }
  onSubmit(): void{
    if ( !this.registerForm.invalid){
      this.userfactory.userSessionFirst(this.user);
      this.redirectCreateContinueService.createAccountContinueRedirect( this.registerForm.invalid);
    }
  }
  matcher = new MyErrorStateMatcher();
  openDialogRegister(): void{
    this.dialog.openDialog();
  }

}
