import { tap } from 'rxjs/operators';
import { DeleteAccountInterface } from './../../interfaces/delete-account';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeleteAccountService {
  private readonly deleteURL = '/devoteeURL/extension-deleteuser.php';

  constructor(
    private http: HttpClient,
  ) { }
  post(payload: DeleteAccountInterface): any {
    return this.http.post<any>(this.deleteURL, payload,
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('X-API-KEY', 'guEFSkAEITO4ZmFxIN76WmdpOqcnG35BgKRgkvO5')
      })
      .pipe(
        tap(console.log)).subscribe(res => {
         console.log(res)
        });
  }
}
