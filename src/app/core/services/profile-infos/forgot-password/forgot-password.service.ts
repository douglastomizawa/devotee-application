import { ForgotPasswordInterface, ResponseForgotPasswordInterface } from './../../../interfaces/forgot-password';
import { tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {
  private readonly loginURL = 'http://34.223.220.245/api/V1/login';

  constructor(
    private http: HttpClient,
  ) { }

  post(payload: ForgotPasswordInterface) {
    return this.http.post<ResponseForgotPasswordInterface>(this.loginURL, payload,
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('X-API-KEY', 'guEFSkAEITO4ZmFxIN76WmdpOqcnG35BgKRgkvO5')
      })
      .pipe(
        tap(console.log));
  }
}
