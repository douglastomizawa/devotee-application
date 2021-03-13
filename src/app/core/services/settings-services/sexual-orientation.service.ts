import {
  ResponseSexualOrientationInterfacePost,
  ResponseSexualOrientationInterfaceGet,
  SexualOrientationInterface }
from './../../interfaces/sexualOrientation.interface';
import { tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SexualOrientationService {
  private readonly sexualOrientatioURL = '/api/php-devotee/extension-servicesexorientationinterest.php';
  constructor(
    private http: HttpClient,
  ) { }

  public post(payload: SexualOrientationInterface, userId: number): any {
    return this.http
    .post<ResponseSexualOrientationInterfacePost>(`${this.sexualOrientatioURL}?userid=${userId}`,
      payload, {
      headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('X-API-KEY', 'guEFSkAEITO4ZmFxIN76WmdpOqcnG35BgKRgkvO5')
    }).pipe(
      tap(console.log));
  }
  public get(userId: number): any {
    return this.http
    .get<ResponseSexualOrientationInterfaceGet>(`${this.sexualOrientatioURL}?userid=${userId}`,
    {
      headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('X-API-KEY', 'guEFSkAEITO4ZmFxIN76WmdpOqcnG35BgKRgkvO5')
    }).pipe(
      tap(console.log));
  }
}
