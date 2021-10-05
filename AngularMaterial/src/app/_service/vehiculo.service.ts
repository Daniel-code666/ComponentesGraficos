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

  private url = `${environment.HOST}/vehiculos`;

  constructor(private http: HttpClient) { }

  public guardar(v: Vehiculo){
    return this.http.post(`${this.url}/guardar`, v);
  }

  public editarVeh(v: Vehiculo){
    return this.http.put(`${this.url}/editar`, v);
  }

  public getVeh(page: number, size: number){
    return this.http.get(`${this.url}/pageable/?page=` + page + `&size=` + size);
  }
}
