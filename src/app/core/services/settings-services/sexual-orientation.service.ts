import { ResponseSexualOrientationInterface } from './../../interfaces/sexualOrientation.interface';
import { tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SexualOrientationService {
  private readonly rangeAgeURL = '/api/php-devotee/extension-serviceagerange.php';
  constructor(
    private http: HttpClient,
  ) { }

  post(payload: SexualOrientationService): any {
    return this.http.post<ResponseSexualOrientationInterface>(this.rangeAgeURL, payload, {
      headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('X-API-KEY', 'guEFSkAEITO4ZmFxIN76WmdpOqcnG35BgKRgkvO5')
    }).pipe(
      tap(console.log));
  }
}
