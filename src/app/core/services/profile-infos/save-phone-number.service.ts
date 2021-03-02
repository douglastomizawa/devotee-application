import { PhoneNumberService } from './phone-number.service';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SavePhoneNumberService {
  phoneNumber;
  phoneNumberEvent = new EventEmitter();
  constructor(private phoneNumberAPI: PhoneNumberService,) { }

  getPhoneNumberSave(userClicked): void {
    this.phoneNumberAPI.get(userClicked).toPromise().then(res => {
      if (res) {
        console.log(res);
        this.phoneNumberEvent.emit(true);
        this.phoneNumber = res;
      }
   });
  }


}
