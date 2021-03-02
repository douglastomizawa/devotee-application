import { tap } from 'rxjs/operators';
import { distanceInterface, ResponseDistanceInterface } from './../../interfaces/distance.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PreferenceDistanceService {
  private readonly distanceURL = '/api/api/V1/preferenceDistance';
  constructor(
    private http: HttpClient,
  ) { }

  put(payload: distanceInterface): any {
    return this.http.put<ResponseDistanceInterface>(this.distanceURL, payload, {
      headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('X-API-KEY', 'guEFSkAEITO4ZmFxIN76WmdpOqcnG35BgKRgkvO5')
    }).pipe(
      tap(console.log));
  }
}
