import { TranslateService } from '../../shared/translate.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-and-sub',
  templateUrl: './title-and-sub.component.html',
  styleUrls: ['./title-and-sub.component.scss']
})
export class TitleAndSubComponent implements OnInit {
  text;
  constructor(private translatePage: TranslateService) { }

  ngOnInit(): void {
     this.text = this.translatePage.textTranslate;



  }

}
