import { Component, OnInit } from '@angular/core';
import { Vehiculo } from 'src/app/_model/vehiculo';
import { VehiculoService } from 'src/app/_service/vehiculo.service';
import { Error } from 'src/app/_model/error_model';
import { LoaderService } from 'src/app/loader/loader.service';
import { FormGroup, FormBuilder, FormControl, Validator, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-editar-vehiculo',
  templateUrl: './editar-vehiculo.component.html',
  styleUrls: ['./editar-vehiculo.component.css']
})
export class EditarVehiculoComponent implements OnInit {

  public error: string;

  public successMsg: any;

  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  form: FormGroup;

  constructor(private VehService: VehiculoService, public loadService: LoaderService,
    private formBuilder: FormBuilder, private _snackBar: MatSnackBar) {
      this.buildForm();
    }

  ngOnInit(): void {
  }

  editarVehiculo(event: Event): void{
    event.preventDefault();

    const v: Vehiculo = new Vehiculo();

    v.idVehiculo = this.form.value.idVehiculo;
    v.placa = this.form.value.placa;
    v.marca = this.form.value.marca;
    v.modelo = this.form.value.modelo;
    v.tipoVehiuclo = this.form.value.tipoVehiculo;
    v.capacidad = this.form.value.capacidad;

    if (this.form.valid)
    {
      this.VehService.editarVeh(v).subscribe(success =>{
        console.log(success);
        this.successMsg = success;
        this.form.reset();
      }, err => {
        console.log(err);
        console.log(this.form);
        this.error = err.error.message;
        this.openSnackBar();
      });
    }else{
      this.form.markAllAsTouched();
    }
  }

  private buildForm(): void{
    this.form = this.formBuilder.group(
      {
        idVehiculo: ['', [Validators.required]],
        placa: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(7)]],
        marca: ['', [Validators.required]],
        modelo: ['', [Validators.required]],
        tipoVehiculo: ['', [Validators.required]],
        capacidad: ['', [Validators.required]],
      });

    // this.form.valueChanges.pipe(debounceTime(500)).subscribe(value => {
    //   console.log(value);
    // });
  }

  openSnackBar() {
    this._snackBar.open(this.error, 'Cerrar', {
      duration: 10000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
