import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatAndMatchesService {
  emitterMatchIdClick = new EventEmitter<object>();
  constructor() { }
  clickToEmitterMatchId(matchId: number, clicked: boolean): any {
    const clickInfos = {
      "clickedIs": clicked,
      "matchId": matchId
    };
    this.emitterMatchIdClick.emit(clickInfos);
  }
}
