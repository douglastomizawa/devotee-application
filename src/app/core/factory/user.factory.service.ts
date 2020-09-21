import { Injectable, OnInit } from '@angular/core';


// export interface userSessionFirst {
//   newUser: object;
// }
@Injectable({
  providedIn: 'root'
})
export class UserFactory {
  // private _userSession: newUser;
  newUser: object = new Object();
  constructor() { }
  userSessionFirst(objectValue): void {
    this.newUser = objectValue;
  }
}
