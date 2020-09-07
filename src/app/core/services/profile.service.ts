import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { tap } from 'rxjs/operators';
import { ResponseProfileInterface } from './../interfaces/profile.interface'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private readonly profileURL = 'http://34.223.220.245/api/V1/user'

  constructor(
    private http: HttpClient,
  ) { }

  get(userId) {
    return this.http.get<ResponseProfileInterface>(`${this.profileURL}?user_id=${userId}`)
      .pipe(
        tap(console.log));
  }
}
