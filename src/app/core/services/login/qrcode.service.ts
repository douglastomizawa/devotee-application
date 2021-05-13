import { ResponseQrCodeInterface } from './../../interfaces/qrcode';
import { tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QrcodeService {

  private readonly qrCodeURL = 'http://34.223.220.245/api/V1/qrCode';

  constructor(
    private http: HttpClient,
  ) { }

  get() {
    return this.http.get<ResponseQrCodeInterface>(this.qrCodeURL,
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('X-API-KEY', 'guEFSkAEITO4ZmFxIN76WmdpOqcnG35BgKRgkvO5')
      })
      .pipe(
        tap(console.log));
  }
}
