import { Injectable } from '@angular/core';
import   * as data  from  '../../login.json';
export default data;
@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  textTranslate;
  constructor() { }
  veriyLanguage(){
    let userLang = navigator.language;
    this.selectLanguage(userLang);
  }
  getDataTranslate(){
    return Object.entries(data);
   }
  selectLanguage(language){
    let data = this.getDataTranslate();
    console.log(Object.entries(data));
    switch (language) {

      case 'pt-BR':
        this.traductionLanguage(data[0][1][0].pt);
        break;
      case 'en-US':
        this.traductionLanguage([0][1][1].us);
        break;

      default:
        this.traductionLanguage(data[0][1][1].us);
        break;
    }
  }
  traductionLanguage(data){
    this.textTranslate = data
}

}
