import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.scss']
})
export class PreferencesComponent implements OnInit {
  distanceMatch: number;
  constructor() { }
  formatLabel(value: number) {
    if (value ) {
      this.distanceMatch = value;
      return Math.round(value);
    }

    return value;
  }
  ngOnInit(): void {
  }

}
