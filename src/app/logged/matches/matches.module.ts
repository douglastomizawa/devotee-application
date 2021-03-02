import { ComponentsModule } from './../../components/components.module';
import { ChatAndMatchesService } from './../../core/services/chat-and-matches.service';
import { NgModule } from '@angular/core';
import { ChatModule } from './../chat/chat.module';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatchesRountingModule } from './matches.rounting.module';


import { MatchesComponent } from './matches.component';


@NgModule({
  declarations: [MatchesComponent],
  imports: [
    ChatModule,
    CommonModule,
    MatIconModule,
    MatCardModule,
    MatchesRountingModule,
    ComponentsModule
  ],
  providers:[
    ChatAndMatchesService
  ]
})
export class MatchesModule { }
