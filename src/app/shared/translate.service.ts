import { Injectable } from '@angular/core';
import   * as data  from  '../../login.json';
export default data;
@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  textTranslate;
  dataFormatation;
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
    console.log(data[0][1][0].us);
    switch (language) {

      case 'pt-BR':
        this.traductionLanguage(data[0][1][0].pt);
        this.dataFormatation = 'pt';
        break;
      case 'en-US':
        this.traductionLanguage(data[0][1][0].us);
        this.dataFormatation = 'us';
        break;

      default:
        this.traductionLanguage(data[0][1][0].us);
        this.dataFormatation = 'us';
        break;
    }
  }
  traductionLanguage(dataLanguage){
    console.log(dataLanguage);
    this.textTranslate = dataLanguage
}

}
