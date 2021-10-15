import { Component, OnInit, ViewChild } from '@angular/core';
import { Vehiculo } from 'src/app/_model/vehiculo';
import { VehiculoService } from 'src/app/_service/vehiculo.service';
import { LoaderService } from 'src/app/loader/loader.service';
import { FormGroup, FormBuilder, FormControl, Validator, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ErrorInterceptorService } from 'src/app/_share/error-interceptor.service';

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
              private formBuilder: FormBuilder, private _snackBar: MatSnackBar, private router: Router,
              public errorInterceptor: ErrorInterceptorService) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  insertVehiculo(event: Event): void{

    event.preventDefault();

    const v: Vehiculo = new Vehiculo();

    v.placa = this.form.value.placa;
    v.marca = this.selectedValue2;
    v.modelo = this.form.value.modelo;
    v.tipoVehiuclo = this.selectedValue;
    v.capacidad = this.form.value.capacidad;

    if (this.form.valid)
    {
      this.VehService.guardar(v).subscribe(success => {
        console.log(success);
        this.successMsg = 'Vehículo registrado';
        this.form.reset();
        this.openSnackBarSuccess();
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
        placa: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(7)]],
        marca: ['', [Validators.required]],
        modelo: ['', [Validators.required, Validators.min(1970), Validators.max(2022)]],
        tipoVehiculo: ['', [Validators.required]],
        capacidad: ['', [Validators.required]],
      });

    // this.form.valueChanges.pipe(debounceTime(500)).subscribe(value => {
    //   console.log(value);
    // });
  }

  openSnackBarSuccess(): void {
    this._snackBar.open(this.successMsg, 'Cerrar',{
      duration: 10000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
