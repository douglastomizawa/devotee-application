import { tap } from 'rxjs/operators';
import { LoginInterface, ResponseLoginInterface } from './../../interfaces/login.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginStandardService {

  private readonly loginURL = 'http://34.223.220.245/api/V1/login';
  public userData: ResponseLoginInterface;
  constructor(
    private http: HttpClient,
  ) { }

  post(payload: LoginInterface) {
    return this.http.post<ResponseLoginInterface>(this.loginURL, payload,
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('X-API-KEY', 'guEFSkAEITO4ZmFxIN76WmdpOqcnG35BgKRgkvO5')
      })
      .pipe(
        tap(console.log));
  }
  public setDataUserLogged(data: ResponseLoginInterface) {
    this.userData = data;
  }
}
