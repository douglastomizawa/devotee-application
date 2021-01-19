import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SugestionMatchesComponent } from './sugestion-matches.component';
import { SugestionMatchesRountingModule } from './sugestion-matches.rounting.module';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatMenuModule} from '@angular/material/menu';



@NgModule({
  declarations: [SugestionMatchesComponent],
  imports: [
    CommonModule,
    SugestionMatchesRountingModule,
    MatIconModule,
    MatCardModule,
    DragDropModule,
    MatMenuModule,
  ]
})
export class SugestionMatchesModule { }
