import { tap } from 'rxjs/operators';
import { ResponseHospitalsInterface, HospitalsInterface} from './../../interfaces/hospitals';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HospitalsService {

  constructor(
    private http: HttpClient,
  ) { }

  post(payload: HospitalsInterface) {
    return this.http.post<ResponseHospitalsInterface>(environment.api.hospitals, payload,
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
