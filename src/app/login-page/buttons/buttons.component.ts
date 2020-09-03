import { TranslateService } from '../../shared/translate.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {
  text;
  constructor(private translatePage: TranslateService) { }

  ngOnInit(): void {
    this.text = this.translatePage.textTranslate;
  }

}
