import { Injectable } from '@angular/core';
import { Client } from '../model/client.model';

@Injectable({
  providedIn: 'root'
})
export class RedirectCreateContinueService {

  constructor() { }
  createAccountContinueRedirect(user: Client): void {
    console.log(user);
  }

}
