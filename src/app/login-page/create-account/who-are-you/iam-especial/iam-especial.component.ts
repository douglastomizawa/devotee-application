import { UserEspecial } from './../../../../core/model/user-especial.model';
import { GetValuesApisPtUsService } from './../../../../core/services/get-values-apis-pt-us.service';
import { InjectSelectAndFilterService } from './../../../../core/services/inject-select-and-filter.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import  { TranslateService } from './../../../../shared/translate.service';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import {ErrorStateMatcher, ThemePalette} from '@angular/material/core';
import {Observable} from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { UserFactory } from 'src/app/core/factory/user.factory.service';
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
/* tslint:disable:no-string-literal */
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
  language: string;
  dataUser: FormGroup;
  userEspecial: UserEspecial = new UserEspecial();
  orientation: string[] = ['Hetero', 'Homo', 'Muitos outros'];
  surgery: string[] = ['surgery-One', 'surgery-Two', 'surgery-Three'];
  filteredOptions: Observable<string[]>;
  filteredMedicine: string[] = [];
  filteredCids: string[] = [];
  filteredHosptals: string[] = [];
  constructor(
    private translatePage: TranslateService,
    private formBuilder: FormBuilder,
    private user: UserFactory,
    private injectSelect: InjectSelectAndFilterService,
    private getValueApis: GetValuesApisPtUsService,
    ) { }
  matcher = new MyErrorStateMatcher();
  ngOnInit(): void {
    this.translatePage.veriyLanguage();
    this.text = this.translatePage.textTranslate;
    this.language = this.translatePage.dataFormatation;
    this.createForm();
    this.getValuePopulateCreateAccount();
    this.injectSelect.getAllAPIToSelectDiv();
    this.filterValueToPushInArrayToOptions();
  }
  setOptionValues(): void {
    this.filteredMedicine = this.getValueApis.filteredMedicine;
    this.filteredHosptals = this.getValueApis.filteredHosptals;
    this.filteredCids = this.getValueApis.filteredCids;
  }
  filterValueToPushInArrayToOptions(): void {
    if (this.translatePage.dataFormatation === 'pt') {
      this.getValueApis.getApisValuePt();
      this.setOptionValues();
    }else{
      this.getValueApis.getApisValueUs();
      this.setOptionValues();
    }
  }

  private selectIsReady(): Promise<void> {
    return new Promise ((resolve: any, reject: any) => {
      setInterval((): void => {
        const selectDivElement: any = document.querySelectorAll('div[id^="mat-select-"]');
        const resolvePromise: object = {promiseResolve: true, elementSelect: selectDivElement[0]};
        selectDivElement[0] !== undefined ? resolve(resolvePromise) : reject(false);
     }, 2000);
    });
  }
  loadMore() {
   return new Promise((resolve: any, reject: any) => {
    this.injectSelect.emitLoadMoreOptions.subscribe(
      loadMore => {
        loadMore ? resolve(true) : reject(false);
      }
    );
   });
  }
  getFinalScrollSelect(inputControl: string): void  {
    this.selectIsReady().then((res: any) => {
      if (res['promiseResolve']){
        const selectScroll = res['elementSelect'];
        selectScroll.addEventListener('scroll', e => {
          if (Math.trunc(selectScroll.scrollTop + selectScroll.clientHeight) === selectScroll.scrollHeight) {
            this.injectSelect.loadMoreOptionSelects(inputControl);
            this.loadMore().then(( resload: any) => {
              if (resload) {
                this.injectSelect.filterOptionSelect(inputControl, this.dataUser);
                // console.log(this.filteredMedicine);
              }
            });
          }
        });
      }
    });
  }
  filterOption(inputControl: string): void {
    this.injectSelect.filterOptionSelect(inputControl, this.dataUser);
    this.getFinalScrollSelect(inputControl);
  }
  filterOptionInput(inputControl: string): void {
    this.filteredOptions = this.dataUser.controls[inputControl].valueChanges.pipe(
      startWith(''),
      map(value => this.injectSelect.filterGenderAndOrientation(value, inputControl))
  );
  }
  nextPage(){
    console.log(this.dataUser.controls, this.userEspecial);
  }
  getValuePopulateCreateAccount(): void{
    this.name =  this.user.newUser[ 'name' ];
    this.email =  this.user.newUser[ 'email' ];
  }
  createForm( ): void {
    this.dataUser = this.formBuilder.group({
          name: ['', [Validators.required]],
          email: ['', [Validators.required, Validators.email]],
          phone: ['', [Validators.required]],
          profession: ['', [Validators.required]],
          gender: ['', [Validators.required]],
          orientation: ['', [Validators.required]],
          cids: [''],
          surgery: [''],
          hosptals: [''],
          medicines: [''],
          checkBirthDeficiency: [''],
          checkHaveTIIC: [''],
          checkImpairedFertility: [''],
          checkOvercomingExample: [''],
          selectCids: [''],
          selectSurgery: [''],
          selectHosptals: [''],
          selectMedicines: [''],
        });
  }

}
