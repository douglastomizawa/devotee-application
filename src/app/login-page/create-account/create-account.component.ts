import { FooterComponent, DialogData } from './../../footer/footer.component';
import { TranslateService } from './../../shared/translate.service';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';


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
  ])
  constructor(private translatePage: TranslateService,  private dialog: FooterComponent) { }


  matcher = new MyErrorStateMatcher();

  openDialogRegister(){
    this.dialog.openDialog()
  }

  ngOnInit(): void {
    this.text = this.translatePage.textTranslate;

  }

}
