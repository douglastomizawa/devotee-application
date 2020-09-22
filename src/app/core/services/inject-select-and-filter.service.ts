import { ResponseMedicinesInterface } from './../interfaces/medicines.interface';
import { takeUntil } from 'rxjs/operators';
import { Injectable, VERSION, EventEmitter } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';
import { MedicinesService } from './medicines.service';
import { TranslateService } from 'src/app/shared/translate.service';


// interface Med {
//   id: string;
//   value: string;
//   value_en: string;
//   country: string;
//   codeiso2: string;
//   codeiso3: string;
//  }
// interface Cids {
//   id: string;
//   value: string;
//   value_en: string;
//   country: string;
//   codeiso2: string;
//   codeiso3: string;
//  }
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
  private gender: string[] = ['Masculino', 'Feminino', 'outros'];
  private orientation: string[] = ['Hetero', 'Homo', 'Muitos outros'];
  private surgery: string[] = ['surgery-One', 'surgery-Two', 'surgery-Three'];
  private cids: Cids[] = [
    {value: 'Cid-One'},
    {value: 'Cid-Two'},
    {value: 'Cid-Three'}];
  private hosptals: Hosp[] = [
    {value: 'hosp-One'},
    {value: 'hosp-Two'},
    {value: 'hosp-Three'}];
  private preferenceUserType: UserType[] = [
    {value: 'hosp-One'},
    {value: 'hosp-Two'},
    {value: 'hosp-Three'}];
  // private cids: Cids[] = [
  //   {value: 'Remedio-One', id: 'A', value_en: 's', country: 'br', codeiso2: 'sd', codeiso3: 'ds'},
  //   {value: 'Remedio-Two', id: 'B', value_en: 's', country: 'br', codeiso2: 'sd', codeiso3: 'ds'},
  //   {value: 'Remedio-Three', id: 'C', value_en: 's', country: 'br', codeiso2: 'sd', codeiso3: 'ds'}];
  private medicines: ResponseMedicinesInterface[];
  private allMedicines: ResponseMedicinesInterface[];
  public filteredBanksMulti: ReplaySubject<ResponseMedicinesInterface[]> = new ReplaySubject<ResponseMedicinesInterface[]>(1);
  public filteredHosptals: ReplaySubject<Hosp[]> = new ReplaySubject<Hosp[]>(1);
  public filteredCids: ReplaySubject<Cids[]> = new ReplaySubject<Cids[]>(1);
  public filteredUserType: ReplaySubject<UserType[]> = new ReplaySubject<UserType[]>(1);


    /** Subject that emits when the component has been destroyed. */
  private _onDestroy = new Subject<void>();
  constructor(
    private medicineAPI: MedicinesService,
    private translatePage: TranslateService,
  ) {}

  private getMedicinesApi(): void {
    this.medicineAPI.get().toPromise().then(res => {
      for (let i of res.slice(0, 50)) {
        this.medicines = res.slice(0, 50);
        this.allMedicines = res;
      }
      console.log(res.slice(0, 50).length);
    });
  }
  getAllAPIToSelectDiv(): void {
    this.translatePage.veriyLanguage();
    this.getMedicinesApi();
  }
  howSelectClicked(inputControl: string): void {
    switch (inputControl) {
      case 'selectMedicines':
        this.filteredBanksMulti.next(this.medicines);
        break;
      case 'selectHosptals':
        this.filteredHosptals.next(this.hosptals);
        break;
      case 'selectCids':
        this.filteredCids.next(this.cids);
        break;
      case 'selectUserType':
        this.filteredUserType.next(this.preferenceUserType);
        break;
      // case 'selectSurgery':
      //   this.filteredSurgery.next(this.surgery);
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


  loadMoreOptionSelects(inputControl: string): void {
    switch (inputControl) {
      case 'selectMedicines':
        const lastItem = this.medicines.length + 50;
        this.medicineAPI.get().toPromise().then(res => {
          this.medicines = res.slice(0, this.medicines.length + 50);
          this.emitLoadMoreOptions.emit(this.medicines);
        });
        break;
      case 'selectHosptals':
        // this.filteredHosptals.next(
        //   this.hosptals.filter(hosptals => hosptals.value.toLowerCase().indexOf(control.value.toLowerCase()) > -1)
        // );
        break;
      // case 'surgery':
      //   inputOptions =  this.surgery.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
      //   break;
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
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterValueSelectEspecial(userControl, inputControl);
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

  private filterValueSelectEspecial( control: any, inputControl: string): void {
    switch (inputControl) {
      case 'selectMedicines':
        this.filteredBanksMulti.next(
          this.allMedicines.filter(medicines => medicines.value.toLowerCase().indexOf(control.value.toLowerCase()) > -1)
        );
        break;
      case 'selectHosptals':
        this.filteredHosptals.next(
          this.hosptals.filter(hosptals => hosptals.value.toLowerCase().indexOf(control.value.toLowerCase()) > -1)
        );
        break;
      case 'cids':
        this.filteredCids.next(
          this.cids.filter(cids => cids.value.toLowerCase().indexOf(control.value.toLowerCase()) > -1)
        );
        break;
      case 'selectUserType':
        this.filteredUserType.next(
          this.preferenceUserType.filter(userType => userType.value.toLowerCase().indexOf(control.value.toLowerCase()) > -1)
        );
        break;
      // case 'surgery':
      //   inputOptions =  this.surgery.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
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
}
