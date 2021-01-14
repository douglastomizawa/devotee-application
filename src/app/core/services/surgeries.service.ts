import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { ResponseSurgeriesInterface } from './../interfaces/surgeries.interface';

@Injectable({
  providedIn: 'root'
})
export class SurgeriesService {

  private readonly medicinesURL = 'http://34.223.220.245/api/V1/listSurgeries';

  constructor(
    private http: HttpClient,
  ) { }

  get() {
    return this.http.get<ResponseSurgeriesInterface>(this.medicinesURL,
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('X-API-KEY', 'guEFSkAEITO4ZmFxIN76WmdpOqcnG35BgKRgkvO5')
      })
      .pipe(
        tap(console.log)
      );
  }
}
