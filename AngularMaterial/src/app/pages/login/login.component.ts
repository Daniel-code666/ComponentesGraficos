import { Component, OnInit } from '@angular/core';
import { Departamento } from 'src/app/_model/departamento';
import { DepartamentoService } from '../../_service/departamento.service';
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
  constructor(private departService: DepartamentoService, public loadService: LoaderService) { }

  ngOnInit(): void {
    // iniciar variables
    // llamar métodos
    // lógica inicial
    
  }
}
