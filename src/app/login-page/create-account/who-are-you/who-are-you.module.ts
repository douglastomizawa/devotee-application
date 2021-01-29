import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhoAreYouComponent } from './who-are-you.component';
import { WhoAreYouRountingModule } from './who-are-you.rounting.module';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatAutocompleteModule} from '@angular/material/autocomplete';


@NgModule({
  declarations: [WhoAreYouComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    RouterModule,
    MatAutocompleteModule,
    WhoAreYouRountingModule,
  ],
  exports: [
    WhoAreYouComponent,
    MatCardModule,
    MatButtonModule,
    MatAutocompleteModule,
  ]
})
export class WhoAreYouModule { }
