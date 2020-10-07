import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchesComponent } from './matches.component';
import { MatchesRountingModule } from './matches.rounting.module';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatMenuModule} from '@angular/material/menu';



@NgModule({
  declarations: [MatchesComponent],
  imports: [
    CommonModule,
    MatchesRountingModule,
    MatIconModule,
    MatCardModule,
    DragDropModule,
    MatMenuModule,
  ]
})
export class MatchesModule { }
