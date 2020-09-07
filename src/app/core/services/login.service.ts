import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { LoginInterface, ResponseLoginInterface } from './../interfaces/login.interface'
import { tap } from 'rxjs/operators';
import { ConsoleReporter } from 'jasmine';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly API = 'http://34.223.220.245/api/V1/login'

  constructor(
    private http: HttpClient,
  ) { }

  post(payload: LoginInterface) {
    return this.http.post<ResponseLoginInterface>(this.API, payload)
      .pipe(
        tap(console.log));
  }
}
