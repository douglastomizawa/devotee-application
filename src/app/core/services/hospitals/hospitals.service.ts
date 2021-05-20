import { tap } from 'rxjs/operators';
import { ResponseHospitalsInterface, HospitalsInterface} from './../../interfaces/hospitals';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HospitalsService {
  private readonly hosptalsURL = 'http://34.223.220.245/api/V1/listMedicationtypes';

  constructor(
    private http: HttpClient,
  ) { }

  post(payload: HospitalsInterface) {
    return this.http.post<ResponseHospitalsInterface>(this.hosptalsURL, payload,
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
