import { IAppState } from 'src/app/store/app.model';
import { State, Store } from '@ngrx/store';
import { LoginStandardService } from './../../../core/services/login/login-standard.service';
import { UserEspecial } from '../../../core/model/user-especial.model';
import { GetValuesApisPtUsService } from '../../../core/services/get-values-apis-pt-us.service';
import { InjectSelectAndFilterService } from '../../../core/services/inject-select-and-filter.service';
import { Component, OnInit } from '@angular/core';
import data, { TranslateService } from '../../../shared/translate.service';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import {ErrorStateMatcher, ThemePalette} from '@angular/material/core';
import {Observable, ReplaySubject} from 'rxjs';
import { map, startWith, takeUntil } from 'rxjs/operators';
import { UserFactory } from 'src/app/core/factory/user.factory.service';
import { IProfileDataState } from 'src/app/store/user-data/user-data.model';
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
/* tslint:disable:no-string-literal */
@Component({
  selector: 'app-iam-especial',
  templateUrl: './change-iam-especial.component.html',
  styleUrls: ['./change-iam-especial.component.scss']
})
export class ChangeIamEspecialComponent implements OnInit {
  text;
  urlProfile;
  urlMore1;
  urlMore2;
  urlMore3;
  color: ThemePalette = 'primary';
  name: string;
  email: string;
  language: string;
  dataUser: FormGroup;
  phone;
  userIsEspecialType: boolean;
  emailUsed: boolean = false;
  userEspecial: UserEspecial = new UserEspecial();
  orientation: string[] = ['Hetero', 'Homo', 'Muitos outros'];
  filteredOptions: Observable<string[]>;
  filteredSurgeries;
  filteredMedicine;
  filteredCids: string[] = [];
  filteredHosptals: string[] = [];
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  profileData$: Observable<IProfileDataState>;

  constructor(
    private translatePage: TranslateService,
    private formBuilder: FormBuilder,
    private user: UserFactory,
    private injectSelect: InjectSelectAndFilterService,
    private getValueApis: GetValuesApisPtUsService,
    private login: LoginStandardService,
    private store: Store,
    private state: State<IAppState>,
    ) {
      this.profileData$ = this.store.select((state: IAppState)=> state.profileData)
      this.profileData$
        .pipe(takeUntil(this.destroyed$))
        .subscribe((profileData:IProfileDataState) => {
          console.log(profileData)
         })
      this.user.newUser['user_type'] === 'devotee' ? this.userIsEspecialType = false : this.userIsEspecialType = true;
    }
  matcher = new MyErrorStateMatcher();

  ngOnInit(): void {

    this.translatePage.veriyLanguage();
    this.text = this.translatePage.textTranslate;
    this.language = this.translatePage.dataFormatation;
    this.createForm();
    //setValues em inputs
    this.getValuePopulateCreateAccount();
    this.injectSelect.getAllAPIToSelectDiv();
    this.filterValueToPushInArrayToOptions();
    this.getGeoLocalization();
  }
  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
  setOptionValues(): void {
    this.filteredMedicine = this.injectSelect.filteredMedicines;
    this.filteredSurgeries= this.injectSelect.filteredSurgeries;
    this.filteredHosptals = this.getValueApis.filteredHosptals;
    this.filteredCids = this.getValueApis.filteredCids;
  }
  getGeoLocalization () {
    navigator.geolocation.getCurrentPosition(position => {
      let positionLATLONG = {
        country: '',
        latitude: position.coords.latitude,
        longitude : position.coords.longitude
      }
      this.translatePage.dataFormatation === 'pt'? positionLATLONG.country = 'BR': positionLATLONG.country = 'US'
      this.injectSelect.getHospitalsApi(positionLATLONG)
    }, err => {
    });

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
  loadMore(): Promise<void> {
   return new Promise((resolve: any, reject: any) => {
    this.injectSelect.emitLoadMoreOptions
      .pipe(takeUntil(this.destroyed$))
      .subscribe(
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
          console.log(inputControl)
          if (Math.trunc(selectScroll.scrollTop + selectScroll.clientHeight) === selectScroll.scrollHeight) {
            console.log(inputControl)
            this.injectSelect.loadMoreOptionSelects(inputControl);
            this.loadMore().then(( resload: any) => {
              console.log(resload)
              if (resload) {
                this.injectSelect.filterOptionSelect(inputControl, this.dataUser);
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
  nextPage(): void{
    this.user.newUser
    this.dataUser.value
    let userRegisterData = Object.assign(this.user.newUser, this.dataUser.value)
    console.log(userRegisterData);
  }
  getValuePopulateCreateAccount(): void{
    this.userEspecial['first_name'] =  this.user.newUser['first_name'];
    this.userEspecial['last_name'] =  this.user.newUser['last_name'];
    this.userEspecial['email'] =  this.user.newUser['email'];
  }
  get f() { return this.dataUser.controls; }
  onSelectFile(event, howInput): void {
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
        // console.log(evt.target.result);
      };
    }
  }
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
          cid: [''],
          surgeries: [''],
          hospitals: [''],
          medication_types: [''],
          born_with_disability: [''],
          tiic: [''],
          fertile: [''],
          prejudice: [''],
          selectCids: [''],
          selectSurgeries: [''],
          selectHosptals: [''],
          selectMedicines: [''],
        });
  }

}
