import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../loader/loader.service';
import { LoginService } from 'src/app/_service/login.service';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
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

  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  // inyección de dependencias y librerías
  constructor(public loadService: LoaderService, private loginService: LoginService,
              // tslint:disable-next-line: variable-name
              private formBuilder: FormBuilder, private router: Router, private _snackBar: MatSnackBar) {
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
      this.loginService.login(this.form.value.username, this.form.value.password).subscribe(data => {

        // const helper = new JwtHelperService();

        console.log(data);

        sessionStorage.setItem(environment.TOKEN, data.access_token);

        // console.log(helper.decodeToken(data.access_token));

        this.router.navigate(['/']).then(() => { window.location.reload(); });
      }/* , err => {
        console.log(err);
        this.openSnackBarSuccess();
      } */);
    } else{
      this.form.markAllAsTouched();
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

  openSnackBarSuccess(): void {
    this._snackBar.open('Nombre de usuario o contraseña incorrecta', 'Cerrar',
    {
      duration: 10000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
