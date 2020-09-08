import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { tap } from 'rxjs/operators';
import { ResponseRecommendationsInterface } from './../interfaces/recommendations.interface'

@Injectable({
  providedIn: 'root'
})
export class RecommendationsService {

  private readonly recommendationsURL = 'http://34.223.220.245/api/V1/findMatch'

  constructor(
    private http: HttpClient,
  ) { }

  get(userId) {
    return this.http.get<ResponseRecommendationsInterface>(`${this.recommendationsURL}?user_id=${userId}`,
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('X-API-KEY', 'guEFSkAEITO4ZmFxIN76WmdpOqcnG35BgKRgkvO5')
      })
      .pipe(
        tap(console.log));
  }
}
