import { ResponseCidsInterface } from './../interfaces/cids';
import { CidsService } from './cids/cids.service';
import { HospitalsService } from './hospitals/hospitals.service';
import { Hospitals } from './../interfaces/profile.interface';
import { ResponseHospitalsInterface, HospitalsInterface  } from './../interfaces/hospitals';
import { SurgeriesService } from './surgeries.service';
import { ResponseSurgeriesInterface } from './../interfaces/surgeries.interface';
import { ResponseMedicinesInterface } from './../interfaces/medicines.interface';
import { takeUntil } from 'rxjs/operators';
import { Injectable, VERSION, EventEmitter } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';
import { MedicinesService } from './medicines.service';
import { TranslateService } from 'src/app/shared/translate.service';
interface Hosp {
  value: string;
 }
interface Cids {
  value: string;
}

interface UserType {
  value: string;
}
@Injectable({
  providedIn: 'root'
})
export class InjectSelectAndFilterService {
  /* tslint:disable:no-string-literal */
  version = VERSION;
  emitLoadMoreOptions = new EventEmitter();
  /*---Arrays das apis de cadastros/perfil----*/
  private gender: string[] = ['Masculino', 'Feminino', 'outros'];
  private orientation: string[] = ['Hetero', 'Homo', 'Muitos outros'];
  private cids: Cids[] = [
    {value: 'Cid-One'},
    {value: 'Cid-Two'},
    {value: 'Cid-Three'}];
  private hosptals: HospitalsInterface[] = [
    { country : 'hosp-one',
      latitude: 15,
      longitude: 20},
      { country : 'hosp-2',
      latitude: 15,
      longitude: 20},
      {
      country : 'hosp-3',
      latitude: 15,
      longitude: 20
    },];
  private preferenceUserType: UserType[] = [
    {value: 'hosp-One'},
    {value: 'hosp-Two'},
    {value: 'hosp-Three'}];
  private localeUser : any;
  // private cids: Cids[] = [
  //   {value: 'Remedio-One', id: 'A', value_en: 's', country: 'br', codeiso2: 'sd', codeiso3: 'ds'},
  //   {value: 'Remedio-Two', id: 'B', value_en: 's', country: 'br', codeiso2: 'sd', codeiso3: 'ds'},
  //   {value: 'Remedio-Three', id: 'C', value_en: 's', country: 'br', codeiso2: 'sd', codeiso3: 'ds'}];
  private medicines: ResponseMedicinesInterface[];
  private surgeries: ResponseSurgeriesInterface[];
  private Hospitals: ResponseHospitalsInterface[];
  private Cids: ResponseCidsInterface[];
  private medicinesPT: ResponseMedicinesInterface[];
  private medicinesUS: ResponseMedicinesInterface[];
  private allMedicines: ResponseMedicinesInterface[];
  private allSurgeries: ResponseSurgeriesInterface[];
  private allCids: ResponseCidsInterface[];
  private allHospitals: ResponseHospitalsInterface[]

  public filteredSurgeries: ReplaySubject<ResponseSurgeriesInterface[]> = new ReplaySubject<ResponseSurgeriesInterface[]>(1);
  public filteredMedicines: ReplaySubject<ResponseMedicinesInterface[]> = new ReplaySubject<ResponseMedicinesInterface[]>(1);
  public filteredHosptals: ReplaySubject<ResponseHospitalsInterface[]> = new ReplaySubject<ResponseHospitalsInterface[]>(1);
  public filteredCids: ReplaySubject<ResponseCidsInterface[]> = new ReplaySubject<ResponseCidsInterface[]>(1);
  public filteredUserType: ReplaySubject<UserType[]> = new ReplaySubject<UserType[]>(1);


    /** Subject that emits when the component has been destroyed. */
  private _onDestroy = new Subject<void>();
  constructor(
    private medicineAPI: MedicinesService,
    private translatePage: TranslateService,
    private surgeriesApi: SurgeriesService,
    private hospitalsServices: HospitalsService,
    private cidsService: CidsService,
  ) {}

  public getHospitalsApi(locale):void {
    this.localeUser = locale
    this.hospitalsServices.post(locale).toPromise().then(res => {
      const hospitals: any[] = res;
      this.Hospitals = hospitals.slice(0, 50);
      this.allHospitals = hospitals;
    })
  }
  private getMedicinesApi(): void {
    this.medicineAPI.get().toPromise().then(res => {
      const medicinePT: any[] = [];
      const medicineUS: any[] = [];
      for (let i of res) {
        switch (i.codeiso2) {
          case 'BR':
            medicinePT.push(i);
            break;
          case 'US':
            medicineUS.push(i);
            break;
          default:
            medicinePT.push(i);
            break;
        }
      }
      switch (this.translatePage.dataFormatation) {
        case 'pt':
          this.medicines = medicinePT.slice(0, 50);
          this.allMedicines = medicinePT;
          break;
        case 'us':
          this.medicines = medicineUS.slice(0, 50);
          this.allMedicines = medicineUS;
          break;
        default:
          break;
      }
    });
  }
  getSurgeriesApi(){
    this.surgeriesApi.get().toPromise().then(res =>{
      const surgeries: any[] = res;
      this.surgeries = surgeries.slice(0, 50);
      this.allSurgeries = surgeries
    })
  }
  getCidsApi() {
    this.cidsService.get().toPromise().then(cids => {
      this.Cids = cids.slice(0, 50);
      this.allCids = cids;
    })
  }
  getAllAPIToSelectDiv(): void {
    this.translatePage.veriyLanguage();
    this.getMedicinesApi();
    this.getSurgeriesApi();
    this.getCidsApi();
  }
  howSelectClicked(inputControl: string): void {
    switch (inputControl) {
      case 'selectMedicines':
        this.filteredMedicines.next(this.medicines);
        break;
      case 'selectHosptals':
        this.filteredHosptals.next(this.Hospitals);
        break;
      case 'selectCids':
        this.filteredCids.next(this.Cids);
        break;
      case 'selectUserType':
        this.filteredUserType.next(this.preferenceUserType);
        break;
      case 'selectSurgeries':
        this.filteredSurgeries.next(this.surgeries);
        break;

      // case 'gender':
      //   inputOptions =  this.gender.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
      //   break;
      // case 'orientation':
      //     inputOptions =  this.orientation.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
      //     break;

      default:
        break;
    }

  }


  loadMoreOptionSelects(inputControl: string): void {
    switch (inputControl) {
      case 'selectMedicines':
        this.medicineAPI.get().toPromise().then(res => {
          const medicnesMore: any[] = [];
          for (let i of  res.slice(0, this.medicines.length + 50)) {
            medicnesMore.push(i);
            this.medicines = medicnesMore
          }
          this.emitLoadMoreOptions.emit(this.medicines);
        });
        break;
      case 'selectHosptals':
        this.hospitalsServices.post(this.localeUser).toPromise().then(res => {
          const hospitalsMore: any[] = [];
          for (let i of  res.slice(0, this.Hospitals.length + 50)) {
            hospitalsMore.push(i);
            this.Hospitals = hospitalsMore
          }
          this.emitLoadMoreOptions.emit(this.Hospitals);
        })
      case 'selectSurgeries':
        this.surgeriesApi.get().toPromise().then(res => {
          const surgeriesMore: any[] = [];
          for (let i of  res.slice(0, this.surgeries.length + 50)) {
            surgeriesMore.push(i);
            this.surgeries = surgeriesMore
          }
          this.emitLoadMoreOptions.emit(this.surgeries);
        });
        break;
      case 'selectCids':
        this.cidsService.get().toPromise().then(res => {
          const cidsMore: any[] = [];
          for (let i of  res.slice(0, this.Cids.length + 50)) {
            cidsMore.push(i);
            this.Cids = cidsMore
          }
          this.emitLoadMoreOptions.emit(this.Cids);
        });
        break;
      // case 'cids':
      //   inputOptions =  this.cids.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
      //   break;
      // case 'gender':
      //   inputOptions =  this.gender.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
      //   break;
      // case 'orientation':
      //     inputOptions =  this.orientation.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
      //     break;
      default:
        break;

    }
  }
  whichAPIToGet(nameAPI: string): void {

  }
  filterOptionSelect(inputControl: string, dataUser: any): void {
    const userControl = dataUser.controls[inputControl];
    this.howSelectClicked(inputControl);
    userControl.valueChanges
      .pipe()
      .subscribe((res) => {
        this.filterValueSelectEspecial(userControl, inputControl, res);
    });
  }

  filterGenderAndOrientation(value: any, optionsArray: string): string[] {
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
  ngOnDestroy(): void {
    this._onDestroy.next();
    this._onDestroy.complete();
  }
  filterTeste() {

  }
  private filterValueSelectEspecial( control: any, inputControl: string, data: string): void {
    switch (this.translatePage.dataFormatation) {
      case 'pt':
        this.filterValuePt(inputControl, data);
        break
      case 'us':
        this.filterValueUs(inputControl, data);
        break
      default:
        break;
    }

  }
  filterValuePt(inputControl, data) {
    switch (inputControl) {
      case 'selectMedicines':
        this.filteredMedicines.next(
          this.allMedicines.filter(medicines => medicines.value.toLowerCase().indexOf(data.toLowerCase()) > -1)
        );
        break;
      case 'selectHosptals':
        this.filteredHosptals.next(
          this.allHospitals.filter(hosptals => hosptals.name.toLowerCase().indexOf(data.toLowerCase()) > -1)
        );
        break;
      case 'selectCids':
        this.filteredCids.next(
          this.Cids.filter(cids => cids.description.toLowerCase().indexOf(data.toLowerCase()) > -1)
        );
        break;
      case 'selectUserType':
        this.filteredUserType.next(
          this.preferenceUserType.filter(userType => userType.value.toLowerCase().indexOf(data.toLowerCase()) > -1)
        );
        break;
      case 'selectSurgeries':
        this.filteredSurgeries.next(
          this.allSurgeries.filter(surgeries => surgeries.name.toLowerCase().indexOf(data.toLowerCase()) > -1)
        );
        break;

      // case 'gender':
      //   inputOptions =  this.gender.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
      //   break;
      // case 'orientation':
      //     inputOptions =  this.orientation.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
      //     break;
      default:
        break;
    }
  }
  filterValueUs(inputControl, data) {
    switch (inputControl) {
      case 'selectMedicines':
        this.filteredMedicines.next(
          this.allMedicines.filter(medicines => medicines.value_en.toLowerCase().indexOf(data.toLowerCase()) > -1)
        );
        break;
      case 'selectHosptals':
        this.filteredHosptals.next(
          this.allHospitals.filter(hosptals => hosptals.name.toLowerCase().indexOf(data.toLowerCase()) > -1)
        );
        break;
      case 'selectCids':
        this.filteredCids.next(
          this.Cids.filter(cids => cids.description_en.toLowerCase().indexOf(data.toLowerCase()) > -1)
        );
        break;
      case 'selectUserType':
        this.filteredUserType.next(
          this.preferenceUserType.filter(userType => userType.value.toLowerCase().indexOf(data.toLowerCase()) > -1)
        );
        break;
      case 'selectSurgeries':
        this.filteredSurgeries.next(
          this.allSurgeries.filter(surgeries => surgeries.name_en.toLowerCase().indexOf(data.toLowerCase()) > -1)
        );
        break;

      // case 'gender':
      //   inputOptions =  this.gender.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
      //   break;
      // case 'orientation':
      //     inputOptions =  this.orientation.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
      //     break;
      default:
        break;
    }
  }
}
