import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../loader/loader.service';

// export interface Departamentos{
//   id: number;
//   nombre: string;
// }

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  texto: 'Login';

  // inyección de dependencias y librerías
  constructor(public loadService: LoaderService) { }

  ngOnInit(): void {
    // iniciar variables
    // llamar métodos
    // lógica inicial
  }
}
