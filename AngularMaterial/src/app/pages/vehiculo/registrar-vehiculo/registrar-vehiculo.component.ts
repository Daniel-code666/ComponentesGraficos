import { Component, OnInit, ViewChild } from '@angular/core';
import { Vehiculo } from 'src/app/_model/vehiculo';
import { VehiculoService } from 'src/app/_service/vehiculo.service';
import { LoaderService } from 'src/app/loader/loader.service';
import { FormGroup, FormBuilder, FormControl, Validator, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ErrorInterceptorService } from 'src/app/_share/error-interceptor.service';
import { VehiculoComponent } from '../vehiculo.component';

@Component({
  selector: 'app-registrar-vehiculo',
  templateUrl: './registrar-vehiculo.component.html',
  styleUrls: ['./registrar-vehiculo.component.css']
})
export class RegistrarVehiculoComponent implements OnInit {

  // public error: string;

  public successMsg: any;

  public selectedValue: string;

  public selectedValue2: string;

  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  form: FormGroup;

  constructor(private VehService: VehiculoService, public loadService: LoaderService,
              // tslint:disable-next-line: variable-name
              private formBuilder: FormBuilder, private _snackBar: MatSnackBar, private router: Router,
              public errorInterceptor: ErrorInterceptorService, private updtList: VehiculoComponent) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  insertVehiculo(event: Event): void{

    event.preventDefault();

    const v: Vehiculo = new Vehiculo();

    // v.placa = this.form.value.placa;
    v.placa = `${this.form.value.placa}-${this.form.value.placanum}`;
    v.marca = this.selectedValue2;
    v.modelo = this.form.value.modelo;
    v.tipoVehiuclo = this.selectedValue;
    v.capacidad = this.form.value.capacidad;

    if (this.form.valid)
    {
      this.VehService.guardar(v).subscribe(success => {
        console.log(success);
        this.successMsg = 'Veh??culo registrado';
        this.form.reset();
        this.openSnackBarSuccess();
        this.updtList.listVehicles();
        this.router.navigate(['/vehiculo']);
      }, err => {
        console.log(err);
      });
    }else{
      this.form.markAllAsTouched();
    }
  }

  private buildForm(): void{
    this.form = this.formBuilder.group(
      {
        placa: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
        placanum: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
        marca: ['', [Validators.required]],
        modelo: ['', [Validators.required, Validators.min(1970), Validators.max(2022)]],
        tipoVehiculo: ['', [Validators.required]],
        capacidad: ['', [Validators.required]],
      });

    // this.form.valueChanges.pipe(debounceTime(500)).subscribe(value => {
    //   console.log(value);
    // });
  }

  public inputValidator(event: any): void {
    const pattern = /^[a-zA-Z]*$/;

    if (!pattern.test(event.target.value)) {
      event.target.value = event.target.value.replace(/[^a-zA-Z]/g, '');
    }
  }

  public inputValidatorNum(event: any): void {
    const pattern = /^[0-9]*$/;

    if (!pattern.test(event.target.value)) {
      event.target.value = event.target.value.replace(/[^0-9]/g, '');
    }
  }

  openSnackBarSuccess(): void {
    this._snackBar.open(this.successMsg, 'Cerrar', {
      duration: 10000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
