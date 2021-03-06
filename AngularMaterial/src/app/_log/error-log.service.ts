import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Errores } from 'src/app/_model/error_model';

export interface ResultJson{}

@Injectable({
  providedIn: 'root'
})
export class ErrorLogService {

  constructor(private readonly http: HttpClient, private router: Router ){}

  urlEncoded = '../../assets/errores.json';

  getText(){
    return this.http.get(this.urlEncoded, {responseType: 'text'});
  }

  postText(error: Errores){
    return this.http.post(this.urlEncoded, error, {responseType: 'text'});
  }
}
