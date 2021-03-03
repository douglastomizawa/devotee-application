import { UserEmailService } from './../../../../core/services/profile-infos/user-email.service';
import { RangeAgeService } from './../../../../core/services/settings-services/range-age.service';
import { PreferenceDistanceService } from './../../../../core/services/settings-services/preference-distance.service';
import { LoggedInUserIdService } from './../../../../core/services/logged-in-user-id.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { InjectSelectAndFilterService } from './../../../../core/services/inject-select-and-filter.service';
import { TranslateService } from './../../../../shared/translate.service';
import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { GetValuesApisPtUsService } from 'src/app/core/services/get-values-apis-pt-us.service';
import { LoadingSpinnerService } from 'src/app/core/loading-spinner.service';
import { Location } from '@angular/common';
import { MatSliderChange } from '@angular/material/slider';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.scss']
})
export class PreferencesComponent implements OnInit {
  text;
  language;
  color: ThemePalette = 'primary';
  userPreference: FormGroup;
  userDistance: Distance = new Distance();
  rangeAgeKeys: RangeAge = new RangeAge();
  sexualOrientation: SexualOrientation = new SexualOrientation();
  filteredUserType: string[] = [];
  teste;
  orientationOptions: any[] = [
    {value: 'Bissexual'},
    {value: 'Heterossexual'},
    {value: 'Homossexual'}
  ];
  userType: any[] = [
    {value: 'Devotee'},
    {value: 'Especial'},
  ];
  intereseType: any[] = [
    {valuePt: 'Homem',  valueUs: 'Men'},
    {valuePt: 'Mulher', valueUs: 'Woman'},
  ];

  constructor(
    private translatePage: TranslateService,
    private injectSelect: InjectSelectAndFilterService,
    private formBuilder: FormBuilder,
    private getValueApis: GetValuesApisPtUsService,
    private loggedUserId: LoggedInUserIdService,
    private loadingSpinnerC: LoadingSpinnerService,
    private location: Location,
    private distanceReplace: PreferenceDistanceService,
    private rangeAge: RangeAgeService,
    private userEmail: UserEmailService,

    ) { }
  return(): void {
    this.location.back();
  }
  formatLabel(value: number): number {
    if (value ) {
      return Math.round(value / 100);
    }
  }
  onInputChange(sliderName, event: MatSliderChange): any {
    switch (sliderName) {
      case 'distance':
        this.userDistance.distance = event.value;
        break;
      case 'ageMin':
        this.rangeAgeKeys.agemin = event.value;
        break;
      case 'ageMax':
        this.rangeAgeKeys.agemax = event.value;
        break;
      default:
        break;
    }


  }
  putPreferenceDistance(): any {
    this.userDistance.user_id = this.loggedUserId.idUser;
    this.distanceReplace.put(this.userDistance).toPromise().then(res => {
    });
  }
  rangeAgePost(): any {
    this.rangeAgeKeys.userId = this.loggedUserId.idUser;
    this.rangeAgeKeys.email = this.userEmail.userEmail;
    this.rangeAge.post(this.rangeAgeKeys).toPromise().then(res => {
    });
  }
  sexualOrientationPost(): any {


  }
  filterSexualOrientation(interest, sexualOrientantion): any {
    this.sexualOrientation.userId = this.loggedUserId.idUser;
    this.sexualOrientation.interestbi = false;
    this.sexualOrientation.interesthomo = false;
    this.sexualOrientation.interesthetero = false;
    this.sexualOrientation.sexualorientation = sexualOrientantion.value;
    for (const val of interest.value) {
      switch (val) {
        case 'Bissexual':
          this.sexualOrientation.interestbi = true;
          break;
        case 'Heterossexual':
          this.sexualOrientation.interesthetero = true;
          break;
        case 'Homossexual':
          this.sexualOrientation.interesthomo = true;
          break;
      }
    }
    console.log(this.sexualOrientation);
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
    this.language = this.translatePage.dataFormatation;
  }
  loadingSpinner(): void{
    // this.loggedUserId.returnIdUser();
    this.loadingSpinnerC.loadingSpinner();
  }
  onSubmit(): void{
    this.putPreferenceDistance();
    this.rangeAgePost();
    this.sexualOrientationPost();
  }
  createForm( ): void {
    this.userPreference = this.formBuilder.group({
          distance: ['', [Validators.required]],
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
export class Distance {
  user_id:              number;
  distance:             number;
}

export class RangeAge {
  userId:               number;
  email:                any;
  agemin:               number;
  agemax:               number;
}
export class SexualOrientation {
  userId:              number;
  interesthomo:        boolean;
  interesthetero:      boolean;
  interestbi:          boolean;
  sexualorientation:   string;
}
