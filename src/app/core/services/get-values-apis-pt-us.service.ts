import { ResponseMedicinesInterface } from './../interfaces/medicines.interface';
import { InjectSelectAndFilterService } from './inject-select-and-filter.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetValuesApisPtUsService {
  filteredMedicine: string[] = [];
  filteredSurgeries: string[] = [];
  filteredHosptals: string[] = [];
  filteredCids: string[] = [];
  filteredUserType: string[] = [];
  constructor(private injectSelect: InjectSelectAndFilterService) { }

  getApisValuePt(): void {
    this.injectSelect.filteredMedicines.subscribe(data => {
      for (const i of data) {
        if (this.filteredMedicine.indexOf(i.value) === -1){
          this.filteredMedicine.push(i.value);
        }
      }
    });
    this.injectSelect.filteredSurgeries.subscribe(data => {
      for (const i of data) {
        if (this.filteredSurgeries.indexOf(i.name) === -1){
          this.filteredSurgeries.push(i.name);
        }
      }
    });
    this.injectSelect.filteredHosptals.subscribe(data => {
      for (const i of data) {
        if (this.filteredHosptals.indexOf(i.value) === -1){
          this.filteredHosptals.push(i.value);
        }
      }
    });
    this.injectSelect.filteredCids.subscribe(data => {
      for (const i of data) {
        if (this.filteredCids.indexOf(i.value) === -1){
          this.filteredCids.push(i.value);
        }
      }
    });
    this.injectSelect.filteredUserType.subscribe(data => {
      for (const i of data) {
        if (this.filteredUserType.indexOf(i.value) === -1){
          this.filteredUserType.push(i.value);
        }
      }
    });
  }
  getApisValueUs(): void{
    this.injectSelect.filteredMedicines.subscribe(data => {
      for (const i of data) {
        if (this.filteredMedicine.indexOf(i.value_en) === -1){
          this.filteredMedicine.push(i.value_en);
        }
      }
    });
    this.injectSelect.filteredHosptals.subscribe(data => {
      for (const i of data) {
        if (this.filteredHosptals.indexOf(i.value) === -1){
          this.filteredHosptals.push(i.value);
        }
      }
    });
    this.injectSelect.filteredCids.subscribe(data => {
      for (const i of data) {
        if (this.filteredCids.indexOf(i.value) === -1){
          this.filteredCids.push(i.value);
        }
      }
    });
    this.injectSelect.filteredUserType.subscribe(data => {
      for (const i of data) {
        if (this.filteredUserType.indexOf(i.value) === -1){
          this.filteredUserType.push(i.value);
        }
      }
    });
  }
}
