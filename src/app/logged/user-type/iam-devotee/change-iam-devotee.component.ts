
import { UserDevotee } from '../../../core/model/user-devotee.model';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../../../shared/translate.service';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import {ErrorStateMatcher, ThemePalette} from '@angular/material/core';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { UserFactory } from 'src/app/core/factory/user.factory.service';
/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-iam-devotee',
  templateUrl: './change-iam-devotee.component.html',
  styleUrls: ['./change-iam-devotee.component.scss']
})
export class ChangeIamDevoteeComponent implements OnInit {
  text;
  urlProfile;
  urlMore1;
  urlMore2;
  urlMore3;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  color: ThemePalette = 'primary';
  name: string;
  email: string;
  dataUser: FormGroup;
  myControl = new FormControl();
  userDevotee: UserDevotee = new UserDevotee();

  gender: string[] = ['Masculino', 'Feminino', 'outros'];
  orientation: string[] = ['Hetero', 'Homo', 'Muitos outros'];
  filteredOptions: Observable<string[]>;
  constructor(
    private translatePage: TranslateService,
    private formBuilder: FormBuilder,
    private user: UserFactory,
    ) { }

  matcher = new MyErrorStateMatcher();
  ngOnInit(): void {
    // this.translatePage.veriyLanguage();
    // this.text = this.translatePage.textTranslate;
    // this.createForm();
    // this.getValuePopulateCreateAccount();
  }
  onSubmit(){

  }
  filterOption(inputControl: string): void {
    this.filteredOptions = this.dataUser.controls[inputControl].valueChanges.pipe(
      startWith(''),
      map(value => this._filterMedicines(value, inputControl))
    );
  }
  getValuePopulateCreateAccount(): void{
    /* tslint:disable:no-string-literal */
    this.userDevotee['name'] =  this.user.newUser['name'];
    this.userDevotee['email'] =  this.user.newUser['email'];
  }
  private _filterMedicines(value: string, optionsArray: string): string[] {
    const filterValue = value.toLowerCase();
    let inputOptions;
    switch (optionsArray) {
      case 'gender':
        inputOptions =  this.gender.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
        break;
      case 'orientation':
          inputOptions =  this.orientation.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
          break;
      default:
        break;
    }
    return inputOptions;
  }
  onSelectFile(event, howInput): void {
    console.log(event.target.files);
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (evt) => {
        switch (howInput) {
          case 'urlProfile':
            this.urlProfile = evt.target.result;
            break;
          case 'urlMore1':
            this.urlMore1 = evt.target.result;
            break;
          case 'urlMore2':
            this.urlMore2 = evt.target.result;
            break;
          case 'urlMore3':
            this.urlMore3 = evt.target.result;
            break;
          default:
            break;
        }
      };
    }
  }
get f() { return this.dataUser.controls; }
  createForm( ): void {
    this.dataUser = this.formBuilder.group({
          first_name: ['', [Validators.required]],
          last_name: ['', [Validators.required]],
          email: ['', [Validators.required, Validators.email]],
          phoneGroup: this.formBuilder.group({
            phones: ['', [Validators.required]],
            phoneVisibility: ['']
          }),
          profession: ['', [Validators.required]],
          gender: ['', [Validators.required]],
          orientation: ['', [Validators.required]],
          aboutYou: [''],
          imgProfile: [''],
          imgMore1: [''],
          imgMore2: [''],
          imgMore3: [''],
        });
  }
}
