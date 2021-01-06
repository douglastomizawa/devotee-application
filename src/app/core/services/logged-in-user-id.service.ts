import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggedInUserIdService {
  idUser: number;

  constructor() { }
  returnIdUser(id: any): void  {
    this.idUser = id;
  }
}
