import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
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
    return this.http.get<ResponseRecommendationsInterface>(`${this.recommendationsURL}?user_id=${userId}`)
      .pipe(
        tap(console.log));
  }
}
