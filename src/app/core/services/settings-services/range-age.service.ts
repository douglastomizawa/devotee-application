import { tap } from 'rxjs/operators';
import { RangeAgeInterface, ResponseRangeAgeInterface } from './../../interfaces/rangeAge.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RangeAgeService {
  private readonly rangeAgeURL = 'http://devotee.com.br/php-devotee/extension-serviceagerange.php'
  constructor(
    private http: HttpClient,
  ) { }

  post(payload: RangeAgeInterface): any {
    return this.http.put<ResponseRangeAgeInterface>(this.rangeAgeURL, payload, {
      headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('X-API-KEY', 'guEFSkAEITO4ZmFxIN76WmdpOqcnG35BgKRgkvO5')
    }).pipe(
      tap(console.log));
  }
}
