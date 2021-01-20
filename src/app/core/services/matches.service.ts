import { ResponseMatchesInterface } from './../interfaces/matches.interface';
import { tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchesService {
  private readonly macthesURL = 'http://34.223.220.245/api/V1/currentMatches';

  constructor(
    private http: HttpClient,
  ) { }

  get(userId) {
    return this.http.get<ResponseMatchesInterface>(`${this.macthesURL}?user_id=${userId}`,
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('X-API-KEY', 'guEFSkAEITO4ZmFxIN76WmdpOqcnG35BgKRgkvO5')
      })
      .pipe(
        tap(console.log));
  }
}
