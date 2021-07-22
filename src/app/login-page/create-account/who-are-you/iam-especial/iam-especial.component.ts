import { RegisterUserDefaultService } from './../../../../core/services/register-user-default/register-user-default.service';
import { RegisterService } from './../../../../core/services/register.service';
import { UserEspecial } from './../../../../core/model/user-especial.model';
import { GetValuesApisPtUsService } from './../../../../core/services/get-values-apis-pt-us.service';
import { InjectSelectAndFilterService } from './../../../../core/services/inject-select-and-filter.service';
import { Component, OnInit } from '@angular/core';
import data, { TranslateService } from './../../../../shared/translate.service';
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
  filteredCids;
  filteredHosptals;

  constructor(
    private translatePage: TranslateService,
    private formBuilder: FormBuilder,
    private user: UserFactory,
    private injectSelect: InjectSelectAndFilterService,
    private getValueApis: GetValuesApisPtUsService,
    private registerService: RegisterService,
    private registerUserDefaultService: RegisterUserDefaultService
    ) {

      this.user.newUser['user_type'] === 'devotee' ? this.userIsEspecialType = false : this.userIsEspecialType = true;
    }
  matcher = new MyErrorStateMatcher();

  ngOnInit(): void {

    this.translatePage.veriyLanguage();
    this.text = this.translatePage.textTranslate;
    this.language = this.translatePage.dataFormatation;
    this.createForm();
    this.getValuePopulateCreateAccount();
    this.injectSelect.getAllAPIToSelectDiv();
    this.filterValueToPushInArrayToOptions();
    this.getGeoLocalization();
  }

  setOptionValues(): void {
    this.filteredMedicine = this.injectSelect.filteredMedicines;
    this.filteredSurgeries= this.injectSelect.filteredSurgeries;
    this.filteredHosptals = this.injectSelect.filteredHosptals;
    this.filteredCids = this.injectSelect.filteredCids;
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
      setTimeout((): void => {
        const selectDivElement: any = document.querySelectorAll('div[id^="mat-select-"]');
        const resolvePromise: object = {promiseResolve: true, elementSelect: selectDivElement[selectDivElement.length -1]};
        selectDivElement[0] !== undefined ? resolve(resolvePromise) : reject(false);
     }, 2000);
    });
  }
  loadMore(): Promise<void> {
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
            console.log(inputControl)
            this.injectSelect.loadMoreOptionSelects(inputControl);
            this.loadMore().then(( resload: any) => {
              if (resload) {
                this.injectSelect.filterOptionSelect(inputControl, this.dataUser);
              }
            });
          }
        });
      }
    });
  }
  filterOptionKeyup(value: string) {
    this.injectSelect.filterOptionSelect(value, this.dataUser);
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
    this.registerService.post(this.registerUserDefaultService.returnRegisterUser(userRegisterData)).toPromise().then(res => {
      if(res.status) {
        this.user.userSessionFirst(userRegisterData);
      }else if (res.status == false){
        this.emailUsed = true;
        setTimeout(() => {
          this.emailUsed = false;
        }, 3000);
      }
    })
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
        console.log(evt.target.result);
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
