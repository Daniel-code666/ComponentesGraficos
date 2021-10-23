import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../loader/loader.service';
import { LoginService } from 'src/app/_service/login.service'; 
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  form: FormGroup;

  // inyección de dependencias y librerías
  constructor(public loadService: LoaderService, private loginService: LoginService,
              private formBuilder: FormBuilder, private router: Router) {
    this.buildForm();
  }

  ngOnInit(): void {
    // iniciar variables
    // llamar métodos
    // lógica inicial
  }

  login(event: Event): void {

    event.preventDefault();

    if (this.form.valid){
      this.loginService.login(this.form.value.userName, this.form.value.userPass).subscribe(data => {

        const helper = new JwtHelperService();

        console.log(data);

        sessionStorage.setItem(environment.TOKEN, data.access_token);

        console.log(helper.decodeToken(data.access_token));
      });
    }

    /* this.loginService.login('admin', '123456').subscribe(data => {

      const helper = new JwtHelperService();

      console.log(data);

      sessionStorage.setItem(environment.TOKEN, data.access_token);

      console.log(helper.decodeToken(data.access_token));
    }); */
  }

  private buildForm(): void{
    this.form = this.formBuilder.group(
      {
        username: ['', [Validators.required]],
        password: ['', [Validators.required]]
      }
    );
  }
}
