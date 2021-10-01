import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Vehiculo } from '../_model/vehiculo';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  private url = `${environment.HOST}/vehiculos`;

  constructor(private http: HttpClient) { }

  public guardar(v: Vehiculo){
    return this.http.post(`${this.url}/guardar`, v);
  }
}
