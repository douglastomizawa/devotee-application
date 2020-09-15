import { Component, OnInit } from '@angular/core';
import { TranslateService } from './../../../../shared/translate.service';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import {ErrorStateMatcher, ThemePalette} from '@angular/material/core';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-iam-especial',
  templateUrl: './iam-especial.component.html',
  styleUrls: ['./iam-especial.component.scss']
})
export class IamEspecialComponent implements OnInit {
  text;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  color: ThemePalette = 'primary';
  dataUser: FormGroup;
  myControl = new FormControl();
  gender: string[] = ['Masculino', 'Feminino', 'outros'];
  orientation: string[] = ['Hetero', 'Homo', 'Muitos outros'];
  cids: string[] = ['cid-One', 'cid-Two', 'cid-Three'];
  surgery: string[] = ['surgery-One', 'surgery-Two', 'surgery-Three'];
  hosptals: string[] = ['hosptals-One', 'hosptals-Two', 'hosptals-Three'];
  medicines: string[] = ['Remedio-One', 'Remedio-Two', 'Remedio-Three'];
  filteredOptions: Observable<string[]>;
  constructor(private translatePage: TranslateService, private formBuilder: FormBuilder) { }

  matcher = new MyErrorStateMatcher();
  ngOnInit(): void {
    this.translatePage.veriyLanguage();
    this.text = this.translatePage.textTranslate;
    this.createForm();

  }
  filterOption(inputControl: string): void {
    this.filteredOptions = this.dataUser.controls[inputControl].valueChanges.pipe(
      startWith(''),
      map(value => this._filterMedicines(value, inputControl))
    );
    console.log(this.dataUser.controls.medicines);
  }
  private _filterMedicines(value: string, optionsArray: string): string[] {
    const filterValue = value.toLowerCase();
    let inputOptions;
    switch (optionsArray) {
      case 'medicines':
        inputOptions =  this.medicines.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
        break;
      case 'hosptals':
        inputOptions =  this.hosptals.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
        break;
      case 'surgery':
        inputOptions =  this.surgery.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
        break;
      case 'cids':
        inputOptions =  this.cids.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
        break;
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
          cids: ['', [Validators.required]],
          surgery: ['', [Validators.required]],
          hosptals: ['', [Validators.required]],
          medicines: ['', [Validators.required]],
          checkBirthDeficiency: [''],
          checkHaveTIIC: [''],
          checkImpairedFertility: [''],
          checkOvercomingExample: [''],
        });
  }
}
