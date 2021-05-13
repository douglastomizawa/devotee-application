import { tap } from 'rxjs/operators';
import { ResponseResgisterUserInterface } from './../interfaces/register.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private readonly registerURL = 'http://34.223.220.245/api/V1/signup';

  constructor(
    private http: HttpClient,
  ) { }

  post(payload: RegisterService) {
    return this.http.post<ResponseResgisterUserInterface>(this.registerURL, payload,
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('X-API-KEY', 'guEFSkAEITO4ZmFxIN76WmdpOqcnG35BgKRgkvO5')
      })
      .pipe(
        tap(console.log));
  }
}
