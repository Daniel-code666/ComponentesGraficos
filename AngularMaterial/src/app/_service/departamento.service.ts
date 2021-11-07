import { Injectable, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Departamento } from '../_model/departamento';
import { Ciudad } from '../_model/ciudad';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService{

  url: string = environment.HOST + '/departamentos/';

  url2 = `${environment.HOST}/departamentos`;

  url3 = `${environment.HOST}/departamentos/ciudad/listarPorDepartamnto`;

  constructor(private http: HttpClient) { }

  public list(): any{
    return this.http.get<Departamento[]>(`${this.url2}/listar`);
  }

  public listCiudades(id: number): any{
    return this.http.get<Ciudad[]>(`${this.url2}/ciudad/listarPorDepartamnto/` + id);
  }
}
