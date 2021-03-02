
import { ChatAndMatchesService } from './../../core/services/chat-and-matches.service';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';


@NgModule({
  declarations: [
    ChatComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
  ],
  exports : [
    ChatComponent
  ],
  providers:[
    ChatAndMatchesService
  ]
})
export class ChatModule { }
