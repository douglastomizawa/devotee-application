import { ResponseCidsInterface } from './../../interfaces/cids';
import { tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CidsService {
private readonly cidsURL = 'http://34.223.220.245/api/V1/listCid';

constructor( private http: HttpClient,) { }
get() {
  return this.http.get<ResponseCidsInterface>(this.cidsURL,
    {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('X-API-KEY', 'guEFSkAEITO4ZmFxIN76WmdpOqcnG35BgKRgkvO5')
    })
    .pipe(
      tap(console.log));
}
}
