import { TabsFooterTermsComponent } from './../../footer/footer-modal.component';
import { FooterComponent, DialogData } from './../../footer/footer.component';
import { TranslateService } from './../../shared/translate.service';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

import { Client } from './../../shared/client';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
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
  registerForm: FormGroup;
  submitted = false;
  minDate: Date;
  maxDate: Date;
  // formatData;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  passwordFormControl = new FormControl('',[
    Validators.required,
    Validators.minLength(6),
  ]);
  repeatPasswordFormControl = new FormControl('',[
    Validators.required,
    Validators.minLength(6),
  ]);

  constructor(private translatePage: TranslateService, private dialog: FooterComponent, private formBuilder: FormBuilder, public footerTabs: TabsFooterTermsComponent ) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 99, 20, 1);
    this.maxDate = new Date(currentYear - 18, 1, 31);
   }
  //  dataFomatation(data){
  //  };
  ngOnInit(): void {
    this.text = this.translatePage.textTranslate;
    // this.dataFomatation(this.translatePage.dataFormatation);
    this.createForm(new Client());
  }
  execClickTabsShow(name: any): void{
    this.footerTabs.execClickTabs(name);
  }
  createForm(client: Client ){
    this.registerForm = this.formBuilder.group({
      name: [ client.name],
      birthdate: [client.birthdate],
      email: [client.email],
      password: [client.password],
      repeatPassword: [client.repeatPassword],
      check: [client.check]
    });
  }
  onSubmit(){
    console.log(this.registerForm.value);
    console.log(Client);
    this.createForm(new Client());
  }
  matcher = new MyErrorStateMatcher();

  openDialogRegister(){
    this.dialog.openDialog();
  }

}
