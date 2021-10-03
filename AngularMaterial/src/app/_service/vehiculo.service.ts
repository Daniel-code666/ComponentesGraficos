import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Vehiculo } from '../_model/vehiculo';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  public errorMsg: string;

  private url = `${environment.HOST}/vehiculos`;

  constructor(private http: HttpClient) { }

  public guardar(v: Vehiculo): Observable<Vehiculo>{
    return this.http.post<Vehiculo>(`${this.url}/guardar`, v);
  }

  private handleError(errorResponse: HttpErrorResponse){
    if (errorResponse.error instanceof ErrorEvent)
    {
      this.errorMsg = errorResponse.error.message;
    }
  }
}
