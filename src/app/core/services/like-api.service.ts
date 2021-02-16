import { tap } from 'rxjs/operators';
import { LikeDeslikeInterface, ResponseLikeDeslikeInterface } from './../interfaces/like.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LikeApiService {
  private readonly likeURL = 'http://34.223.220.245/api/V1/like';

  constructor(
    private http: HttpClient,
  ) { }

  post(payload: LikeDeslikeInterface): any {
    return this.http.post<ResponseLikeDeslikeInterface>(this.likeURL, payload,
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('X-API-KEY', 'guEFSkAEITO4ZmFxIN76WmdpOqcnG35BgKRgkvO5')
      })
      .pipe(
        tap(console.log));
  }
}
