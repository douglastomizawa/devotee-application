import { PhoneNumberService } from './../../core/services/profile-infos/phone-number.service';
import { TranslateService } from './../../shared/translate.service';
import { GetProfileService } from './../../core/services/get-profile.service';
import { DialogData } from './../../footer/footer.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { LoggedInUserIdService } from 'src/app/core/services/logged-in-user-id.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  text;
  language;
  profileInfos;
  profileFirstName;
  userProfileInfos;
  userAge: number;
  noImg;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public dialogRef: MatDialogRef<ProfileComponent>,
    private profileAPI: GetProfileService,
    private translatePage: TranslateService,
    private phoneNumberAPI: PhoneNumberService,
    private userId: LoggedInUserIdService,
  ) {}
  ngOnInit(): any {
    this.getProfile();
    this.language = this.translatePage.dataFormatation;
    this.text = this.translatePage.textTranslate;
  }
  removeSpacesString(stringText): any {
    this.profileFirstName =  stringText.trim();
  }
  getProfile(): any {
    this.userProfileInfos = this.profileAPI.profileUser;
    this.profileInfos = this.userProfileInfos;
    console.log(this.userProfileInfos);
    this.transformeAge();
    this.removeSpacesString(this.userProfileInfos.user.first_name);
    // this.getPhoneNumber();
    this.displayMydeficient();
  }
  transformeAge(): any {
    const birthdateSplit = this.userProfileInfos.user.birthdate.split('-');
    console.log(birthdateSplit);
    const d = new Date();
    const currentYear = d.getFullYear();
    const currentMonth = d.getMonth() + 1;
    const currentDay = d.getDate();
    const yearAnniversary = +birthdateSplit[0];
    const monthAnniversary = +birthdateSplit[1];
    const dayAnniversary = +birthdateSplit[2];
    let howOld: number = currentYear - yearAnniversary;
    if (currentMonth < monthAnniversary || currentMonth == monthAnniversary && currentDay < dayAnniversary) {
        howOld--;
    }
    this.userAge =  howOld < 0 ? 0 : howOld;
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  displayMydeficient(): any{
    console.log(this.profileInfos);
  }
  getPhoneNumber(): any {
    // this.userId.idUser
    this.phoneNumberAPI.get(this.userId.idUser).toPromise().then(res => {
      console.log(res);
    });
  }

}
