import { Injectable } from '@angular/core';
import  *  as  data  from  '../../login.json';
@Injectable({
  providedIn: 'root'
})
export class LoginPageService {

  constructor() { }
  getDataTranslate(){
     return data
    }
}
