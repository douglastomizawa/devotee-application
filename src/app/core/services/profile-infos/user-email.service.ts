import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserEmailService {
  userEmail: number;

  constructor() { }
  returnUserEmail(email: any): void  {
    this.userEmail = email;
  }
}
