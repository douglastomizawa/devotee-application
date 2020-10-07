import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { InjectSelectAndFilterService } from './../../../../core/services/inject-select-and-filter.service';
import { TranslateService } from './../../../../shared/translate.service';
import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { GetValuesApisPtUsService } from 'src/app/core/services/get-values-apis-pt-us.service';
import { SplitMatchesService } from 'src/app/core/services/split-matches.service';
import { LoadingSpinnerService } from 'src/app/core/loading-spinner.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.scss']
})
export class PreferencesComponent implements OnInit {
  text;
  color: ThemePalette = 'primary';
  userPreference: FormGroup;
  filteredUserType: string[] = [];
  teste = false;
  constructor(
    private translatePage: TranslateService,
    private injectSelect: InjectSelectAndFilterService,
    private formBuilder: FormBuilder,
    private getValueApis: GetValuesApisPtUsService,
    private splitMatches: SplitMatchesService,
    private loadingSpinnerC: LoadingSpinnerService,
    private location: Location,

    ) { }
  return(): void {
    this.location.back();
  }
  formatLabel(value: number) {
    if (value ) {
      console.log(value);
      return Math.round(value / 100); //+ 'K';
    }
    // return value;
  }
  setOptionValues(): void {
    this.filteredUserType = this.getValueApis.filteredUserType;
  }
  filterOption(inputControl: string): void {
    this.injectSelect.filterOptionSelect(inputControl, this.userPreference);
  }
  filterValueToPushInArrayToOptions(): void {
    this.translatePage.dataFormatation === 'pt' ? this.getValueApis.getApisValuePt() : this.getValueApis.getApisValueUs();
    this.setOptionValues();
  }
  ngOnInit(): void {
    this.createForm();
    this.filterValueToPushInArrayToOptions();
    this.translatePage.veriyLanguage();
    this.text = this.translatePage.textTranslate;
  }
  loadingSpinner(): void{
    this.splitMatches.returnIdUser(19);
    this.loadingSpinnerC.loadingSpinner();
  }
  createForm( ): void {
    this.userPreference = this.formBuilder.group({
          localization: ['', [Validators.required]],
          userType: ['', [Validators.required]],
          genre: ['', [Validators.required]],
          orientation: ['', [Validators.required]],
          interesseType: ['', [Validators.required]],
          minYears: ['', [Validators.required]],
          MaxYears: [''],
          selectUserType: [''],
          selectGenre: [''],
          selectOrientation: [''],
          selectIntertingType: [''],
        });
  }
}
