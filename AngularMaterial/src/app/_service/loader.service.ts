import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  progressBarReactiva = new Subject<boolean>();

  constructor() { }
}
