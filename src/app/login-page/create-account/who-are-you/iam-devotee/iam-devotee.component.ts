import { Component, OnInit } from '@angular/core';
import { TranslateService } from './../../../../shared/translate.service';
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
  templateUrl: './iam-devotee.component.html',
  styleUrls: ['./iam-devotee.component.scss']
})
export class IamDevoteeComponent implements OnInit {
  text;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  color: ThemePalette = 'primary';
  name: string;
  email: string;
  dataUser: FormGroup;
  myControl = new FormControl();
  gender: string[] = ['Masculino', 'Feminino', 'outros'];
  orientation: string[] = ['Hetero', 'Homo', 'Muitos outros'];
  filteredOptions: Observable<string[]>;
  constructor(
    private translatePage: TranslateService,
    private formBuilder: FormBuilder,
    private user: UserFactory
    ) { }

  matcher = new MyErrorStateMatcher();
  ngOnInit(): void {
    this.translatePage.veriyLanguage();
    this.text = this.translatePage.textTranslate;
    this.createForm();
    this.getValuePopulateCreateAccount();
  }
  filterOption(inputControl: string): void {
    this.filteredOptions = this.dataUser.controls[inputControl].valueChanges.pipe(
      startWith(''),
      map(value => this._filterMedicines(value, inputControl))
    );
    console.log(this.dataUser.controls.medicines);
  }
  getValuePopulateCreateAccount(): void{
    /* tslint:disable:no-string-literal */
    this.name =  this.user.newUser[ 'name' ];
    this.email =  this.user.newUser[ 'email' ];
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
  createForm( ): void {
    this.dataUser = this.formBuilder.group({
          name: ['', [Validators.required]],
          email: ['', [Validators.required, Validators.email]],
          phone: ['', [Validators.required]],
          profession: ['', [Validators.required]],
          gender: ['', [Validators.required]],
          orientation: ['', [Validators.required]],
          checkBirthDeficiency: [''],
          checkHaveTIIC: [''],
          checkImpairedFertility: [''],
          checkOvercomingExample: [''],
        });
  }
}
