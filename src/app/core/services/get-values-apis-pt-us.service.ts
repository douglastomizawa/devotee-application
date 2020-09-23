import { InjectSelectAndFilterService } from './inject-select-and-filter.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetValuesApisPtUsService {
  filteredMedicine: string[] = [];
  filteredHosptals: string[] = [];
  filteredCids: string[] = [];
  filteredUserType: string[] = [];
  constructor(private injectSelect: InjectSelectAndFilterService) { }

  getApisValuePt(): void {
    this.injectSelect.filteredBanksMulti.subscribe(data => {
      for (let i of data) {
        if (this.filteredMedicine.indexOf(i.value) === -1){
          this.filteredMedicine.push(i.value);
        }
      }
    });
    this.injectSelect.filteredHosptals.subscribe(data => {
      for (let i of data) {
        if (this.filteredHosptals.indexOf(i.value) === -1){
          this.filteredHosptals.push(i.value);
        }
      }
    });
    this.injectSelect.filteredCids.subscribe(data => {
      for (let i of data) {
        if (this.filteredCids.indexOf(i.value) === -1){
          this.filteredCids.push(i.value);
        }
      }
    });
    this.injectSelect.filteredUserType.subscribe(data => {

      for (let i of data) {

        if (this.filteredUserType.indexOf(i.value) === -1){
          this.filteredUserType.push(i.value);
        }
      }
    });
  }
  getApisValueUs(): void{
    this.injectSelect.filteredBanksMulti.subscribe(data => {
      for (let i of data) {
        if (this.filteredMedicine.indexOf(i.value_en) === -1){
          console.log(i.value_en);
          this.filteredMedicine.push(i.value_en);
        }
      }
    });
    this.injectSelect.filteredHosptals.subscribe(data => {
      for (let i of data) {
        if (this.filteredHosptals.indexOf(i.value) === -1){
          this.filteredHosptals.push(i.value);
        }
      }
    });
    this.injectSelect.filteredCids.subscribe(data => {
      for (let i of data) {
        if (this.filteredCids.indexOf(i.value) === -1){
          this.filteredCids.push(i.value);
        }
      }
    });
    this.injectSelect.filteredUserType.subscribe(data => {
      for (let i of data) {
        if (this.filteredUserType.indexOf(i.value) === -1){
          this.filteredUserType.push(i.value);
        }
      }
    });
  }
}
