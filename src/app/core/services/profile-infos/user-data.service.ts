import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  userData: any;
constructor() { }
  returnUserData(userData: any): void  {
    this.userData = userData;
  }
}
