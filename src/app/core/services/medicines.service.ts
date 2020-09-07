import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { tap } from 'rxjs/operators';
import { ResponseMedicinesInterface } from './../interfaces/medicines.interface'

@Injectable({
  providedIn: 'root'
})
export class MedicinesService {

  private readonly medicinesURL = 'http://34.223.220.245/api/V1/listMedicationtypes'

  constructor(
    private http: HttpClient,
  ) { }

  get() {
    return this.http.get<ResponseMedicinesInterface>(this.medicinesURL)
    .pipe(
      tap(console.log)
    )
  }
}
