import { tap } from 'rxjs/operators';
import { LikeDeslikeInterface, ResponseLikeDeslikeInterface } from './../interfaces/like.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeslikeApiService {
  private readonly deslikeURL = '/api/api/V1/undoLike';

  constructor(
    private http: HttpClient,
  ) { }

  post(payload: LikeDeslikeInterface) {
    return this.http.post<ResponseLikeDeslikeInterface>(this.deslikeURL, payload,
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('X-API-KEY', 'guEFSkAEITO4ZmFxIN76WmdpOqcnG35BgKRgkvO5')
      })
      .pipe(
        tap(console.log));
  }
}
