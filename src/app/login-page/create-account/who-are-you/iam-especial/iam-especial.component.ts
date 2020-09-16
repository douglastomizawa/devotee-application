import { Component, OnInit, VERSION, ViewChild } from '@angular/core';
import { TranslateService } from './../../../../shared/translate.service';
import { MedicinesService } from './../../../../core/services/medicines.service';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import {ErrorStateMatcher, ThemePalette} from '@angular/material/core';
import {Observable, ReplaySubject, Subject} from 'rxjs';
import { map, startWith, take, takeUntil } from 'rxjs/operators';
import { UserFactory } from 'src/app/core/factory/user.factory.service';
import { MatSelect } from '@angular/material/select';
/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
interface Med {
  id: string;
  name: string;
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
  name: string;
  email: string;
  dataUser: FormGroup;
  gender: string[] = ['Masculino', 'Feminino', 'outros'];
  orientation: string[] = ['Hetero', 'Homo', 'Muitos outros'];
  cids: string[] = ['cid-One', 'cid-Two', 'cid-Three'];
  surgery: string[] = ['surgery-One', 'surgery-Two', 'surgery-Three'];
  hosptals: string[] = ['hosptals-One', 'hosptals-Two', 'hosptals-Three'];
  // medicines: string[] = ['Remedio-One', 'Remedio-Two', 'Remedio-Three'];
  filteredOptions: Observable<string[]>;

  version = VERSION;

   /** control for the MatSelect filter keyword multi-selection */
  public bankMultiFilterCtrl: FormControl = new FormControl();

  /** list of banks */
  private medicines: Med[] = [
    {name: 'Bank A (Switzerland)', id: 'A'},
    {name: 'Bank B (Switzerland)', id: 'B'},
    {name: 'Bank C (France)', id: 'C'},
    {name: 'Bank D (France)', id: 'D'},
    {name: 'Bank E (France)', id: 'E'},
    {name: 'Bank F (Italy)', id: 'F'},
    {name: 'Bank G (Italy)', id: 'G'},
    {name: 'Bank H (Italy)', id: 'H'},
    {name: 'Bank I (Italy)', id: 'I'},
    {name: 'Bank J (Italy)', id: 'J'},
    {name: 'Bank K (Italy)', id: 'K'},
    {name: 'Bank L (Germany)', id: 'L'},
    {name: 'Bank M (Germany)', id: 'M'},
    {name: 'Bank N (Germany)', id: 'N'},
    {name: 'Bank O (Germany)', id: 'O'},
    {name: 'Bank P (Germany)', id: 'P'},
    {name: 'Bank Q (Germany)', id: 'Q'},
    {name: 'Bank R (Germany)', id: 'R'}
  ];


  /** list of banks filtered by search keyword for multi-selection */
  public filteredBanksMulti: ReplaySubject<Med[]> = new ReplaySubject<Med[]>(1);

  @ViewChild('singleSelect', {static: false}) singleSelect: MatSelect;

  /** Subject that emits when the component has been destroyed. */
  private _onDestroy = new Subject<void>();
  constructor(
    private translatePage: TranslateService,
    private formBuilder: FormBuilder,
    private user: UserFactory,
    private medicinesS: MedicinesService,
    ) { }

  matcher = new MyErrorStateMatcher();
  ngOnInit(): void {
    this.translatePage.veriyLanguage();
    this.text = this.translatePage.textTranslate;
    this.createForm();
    this.getValuePopulateCreateAccount();
    this.medicinesS.get().subscribe(console.log);

    this.filteredBanksMulti.next(this.medicines.slice());
    this.dataUser.controls.medicines.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterBanksMulti();
      });
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
      // case 'medicines':
      //   inputOptions =  this.medicines.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
      //   break;
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




  ngOnDestroy(): void {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  private filterBanksMulti(): void {
    if (!this.medicines) {
      return;
    }
    // get the search keyword
    let search = this.dataUser.controls.medicines .value;
    if (!search) {
      this.filteredBanksMulti.next(this.medicines.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the banks
    this.filteredBanksMulti.next(
      this.medicines.filter(medicines => medicines.name.toLowerCase().indexOf(search) > -1)
    );
  }
}
