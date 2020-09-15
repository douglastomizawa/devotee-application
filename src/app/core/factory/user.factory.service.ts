import { Injectable, OnInit } from '@angular/core';


// export interface userSessionFirst {
//   newUser: object;
// }
@Injectable({
  providedIn: 'root'
})
export class UserFactory {
  // private _userSession: newUser;
  private newUser: object;
  constructor() { }
  userSessionFirst(objectValue): void {
    this.newUser = objectValue;
  }
  teste(){
    console.log(this.newUser);
  }
  // OnInit(){
  //   console.log(this.userSessionFirst);
  // }
  // set userSessionFirst(value) {
  //   this._userSession = value;
  // }

  // get userSessionFirst() {
  //     return this._userSession;
  // }
}
