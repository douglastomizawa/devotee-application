import { interestInterface, ResponseInterestInterface } from './../../interfaces/interestAutorization.interface';
import { tap } from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InterestAtualizationService {
  private readonly rangeAgeURL = '/api/php-devotee/extension-serviceagerange.php';
  constructor(
    private http: HttpClient,
  ) { }

  post(payload: interestInterface): any {
    return this.http.post<ResponseInterestInterface>(this.rangeAgeURL, payload, {
      headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('X-API-KEY', 'guEFSkAEITO4ZmFxIN76WmdpOqcnG35BgKRgkvO5')
    }).pipe(
      tap(console.log));
  }
}
