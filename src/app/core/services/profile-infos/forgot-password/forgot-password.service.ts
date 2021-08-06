import { ForgotPasswordInterface, ResponseForgotPasswordInterface } from './../../../interfaces/forgot-password';
import { tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {

  constructor(
    private http: HttpClient,
  ) { }

  post(payload: ForgotPasswordInterface) {
    return this.http.post<ResponseForgotPasswordInterface>(environment.api.forgotPassword, payload,
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('X-API-KEY', 'guEFSkAEITO4ZmFxIN76WmdpOqcnG35BgKRgkvO5')
      })
      .pipe(
        tap(console.log));
  }
}
