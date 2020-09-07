import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { tap } from 'rxjs/operators';
import { LoginInterface, ResponseLoginInterface } from './../interfaces/login.interface'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly loginURL = 'http://34.223.220.245/api/V1/login'

  constructor(
    private http: HttpClient,
  ) { }

  post(payload: LoginInterface) {
    return this.http.post<ResponseLoginInterface>(this.loginURL, payload)
      .pipe(
        tap(console.log));
  }
}
