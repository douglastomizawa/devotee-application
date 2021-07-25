import { ResponseCidsInterface } from './../../interfaces/cids';
import { tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CidsService {
constructor( private http: HttpClient,) { }
get() {
  return this.http.get<ResponseCidsInterface>(environment.api.cids,
    {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('X-API-KEY', 'guEFSkAEITO4ZmFxIN76WmdpOqcnG35BgKRgkvO5')
    })
    .pipe(
      tap(console.log));
}
}
