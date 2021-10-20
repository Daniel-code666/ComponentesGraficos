import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../loader/loader.service';
import { LoginService } from 'src/app/_service/login.service'; 
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
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
  constructor(public loadService: LoaderService, private loginService: LoginService) { }

  ngOnInit(): void {
    // iniciar variables
    // llamar métodos
    // lógica inicial

    this.loginService.login('admin', '123456').subscribe(data => {

      const helper = new JwtHelperService();

      console.log(data);

      sessionStorage.setItem(environment.TOKEN, data.access_token);

      console.log(helper.decodeToken(data.access_token));
    });
  }
}
