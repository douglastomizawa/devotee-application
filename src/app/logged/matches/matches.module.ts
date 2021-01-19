import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchesComponent } from './matches.component';
import { MatchesRountingModule } from './matches.rounting.module';



@NgModule({
  declarations: [MatchesComponent],
  imports: [
    CommonModule,
    MatchesRountingModule
  ]
})
export class MatchesModule { }
