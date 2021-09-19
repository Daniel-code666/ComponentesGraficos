import { Injectable, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Departamento } from '../_model/departamento';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService{

  url: string = environment.HOST + '/departamentos/';

  url2 = `${environment.HOST}/departamentos`;

  constructor(private http: HttpClient) { }

  public list(){
    return this.http.get<Departamento[]>(`${this.url2}/listar`);
  }
}
