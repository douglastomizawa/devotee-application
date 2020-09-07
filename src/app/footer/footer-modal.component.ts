import { FooterModalComponent } from './footer.component';
import { TranslateService } from './../shared/translate.service';
import { Component, OnInit, Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-footer-modal',
  templateUrl: 'footer-modal.component.html',
  styleUrls: ['./footer-modal.component.scss', '../login-page/login-page.component.scss']
})
export class TabsFooterTermsComponent implements OnInit {
textFooter;

  constructor( private translatePage: TranslateService) {}
    ngOnInit(): void {
      this.textFooter = this.translatePage.textTranslate;
      this.hideTabs();
    }

    execClickTabs(name: any): void {
      const btnClass = [];
      switch (name) {
        case 'click-terms':
            btnClass[0] = 'click-terms';
            break;
        case 'click-policy-privacy':
            btnClass[0] = 'click-policy-privacy';
                break;
        case 'click-policy-cookies':
            btnClass[0] = 'click-policy-cookies';
                break;
        case 'click-procedures':
            btnClass[0] = 'click-procedures';
                break;
        case 'click-security':
            btnClass[0] = 'click-security';
                break;
        default:
            break;
    }
      this.openTabsClick(btnClass);
  }

  openTabsClick(btnClass: any): void {
    this.hideTabs();
    this.openTabs(btnClass);
    // this.styleTabsTerms(btnClass)
  }
  hideTabs(): void {
      let i: any;
      let tabcontent: any;
      tabcontent = document.getElementsByClassName('tabcontent');
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
      }
  }
  openTabs( cityName: any): void {
      let  i: any;
      let tabcontent: any;
      let tablinks: any;
      tabcontent = document.getElementsByClassName('tabcontent');
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
      }
      tablinks = document.getElementsByClassName('tablinks');
      this.styleTextTabs(cityName);
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(' active', '');
      }
      document.getElementById(cityName).style.display = 'block';
      // evt.currentTarget.className += ' active';
    }
  styleTextTabs(evt: any): void {
      let tabContent: any;
      let tabs: any;
      const elementClicked = document.getElementsByClassName(evt)[0];

      tabContent = document.getElementsByClassName('content-terms');
      tabs = document.getElementsByClassName('tab');
      console.log(tabContent);
      for (let i = 0; i < tabContent.length-1; i++) {
        console.log(tabContent[i].children[0]);
          tabContent[i].children[0].classList.remove('modal-terms');
      }
      elementClicked.classList.add('modal-terms');
  }
  execClickTabsShow(name: any): void{
    this.execClickTabs(name);
  }
  onNoClick(): void {

  }


}
