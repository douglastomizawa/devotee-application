import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { InjectSelectAndFilterService } from './../../../../core/services/inject-select-and-filter.service';
import { TranslateService } from './../../../../shared/translate.service';
import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { GetValuesApisPtUsService } from 'src/app/core/services/get-values-apis-pt-us.service';
import { SplitMatchesService } from 'src/app/core/services/split-matches.service';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.scss']
})
export class PreferencesComponent implements OnInit {
  text;
  distanceMatch: number;
  color: ThemePalette = 'primary';
  userPreference: FormGroup;
  filteredUserType: string[] = [];
  ShowLoading = false;
  teste = false;
  constructor(
    private translatePage: TranslateService,
    private injectSelect: InjectSelectAndFilterService,
    private formBuilder: FormBuilder,
    private getValueApis: GetValuesApisPtUsService,
    private splitMatches: SplitMatchesService,
    private router: Router,
    ) { }
  formatLabel(value: number) {
    if (value ) {
      return Math.round(value / 1000) + 'K';
    }
    return value;
  }
  setOptionValues(): void {
    this.filteredUserType = this.getValueApis.filteredUserType;
  }
  filterOption(inputControl: string): void {
    this.injectSelect.filterOptionSelect(inputControl, this.userPreference);

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
  ngOnInit(): void {
    this.createForm();
    this.filterValueToPushInArrayToOptions();
    this.translatePage.veriyLanguage();
    this.text = this.translatePage.textTranslate;
  }
  private selectIsReady(): Promise<void> {
    return new Promise ((resolve: any, reject: any) => {
      setInterval((): void => {
        const resolvePromise = this.splitMatches.matchUser['finishPromise'];
        resolvePromise !== undefined ? resolve(resolvePromise) : reject(false);
     }, 200);
    });
  }
  loadingSpinner(): void{
    this.ShowLoading = true;
    this.splitMatches.getMatches();
    this.selectIsReady().then( (ressponse: void)  => {
      if (ressponse !== null) {
        this.router.navigate(['/matches']);
      }
    });
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
