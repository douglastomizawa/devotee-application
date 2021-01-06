import { tap } from 'rxjs/operators';
import { ResponseExibitionLikesInterface } from './../interfaces/exibition-likes.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PerfilLikesService {
  private readonly perfilLikeURL= 'http://devotee.com.br/php-devotee/extension-servicelikes.php'
  constructor(
    private http: HttpClient,
  ) { }

  get(userId) {
    return this.http.get<ResponseExibitionLikesInterface>(
      `${this.perfilLikeURL}?userid=${userId}`
      )
      .pipe(
        tap(console.log)
      );
  }
}
