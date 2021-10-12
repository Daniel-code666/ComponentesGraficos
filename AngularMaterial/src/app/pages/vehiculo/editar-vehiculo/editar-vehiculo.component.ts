import { Component, OnInit } from '@angular/core';
import { Vehiculo } from 'src/app/_model/vehiculo';
import { VehiculoService } from 'src/app/_service/vehiculo.service';
import { Error } from 'src/app/_model/error_model';
import { LoaderService } from 'src/app/loader/loader.service';
import { FormGroup, FormBuilder, FormControl, Validator, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ErrorInterceptorService } from 'src/app/_share/error-interceptor.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-editar-vehiculo',
  templateUrl: './editar-vehiculo.component.html',
  styleUrls: ['./editar-vehiculo.component.css']
})
export class EditarVehiculoComponent implements OnInit {

  public error: string;

  public successMsg: any;

  public selectedValue: string;

  public selectedValue2: string;

  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  form: FormGroup;

  vehicle: Vehiculo = new Vehiculo();

  veh: any;

  constructor(private VehService: VehiculoService, public loadService: LoaderService,
              private formBuilder: FormBuilder, private _snackBar: MatSnackBar,
              public errorInterceptor: ErrorInterceptorService, private router: Router, private route: ActivatedRoute) {
      this.buildForm();
    }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      let idVehiculo = params.idVehiculo;
      this.loadVehiculo(idVehiculo);
    });
  }

  loadVehiculo(idVehiculo: number): void{
    this.VehService.getVehById(idVehiculo).subscribe(data => {
      console.log(data);

      this.veh = data;

      console.log(this.veh.placa);

    });
  }

  editarVehiculo(event: Event): void{
    event.preventDefault();

    const v: Vehiculo = new Vehiculo();

    v.idVehiculo = this.veh.idVehiculo;
    v.placa = this.form.value.placa;
    v.marca = this.form.value.marca;
    v.modelo = this.form.value.modelo;
    v.tipoVehiuclo = this.form.value.tipoVehiculo;
    v.capacidad = this.form.value.capacidad;

    if (this.form.valid)
    {
      this.VehService.editarVeh(v).subscribe(success => {
        console.log(success);
        this.successMsg = 'Vehículo correctamente actualizado';
        this.openSnackBarSuccess();
        this.router.navigate(['/vehiculo']);
        this.form.reset();
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
        idVehiculo: ['', []],
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

  openSnackBar() {
    this._snackBar.open(this.error, 'Cerrar', {
      duration: 10000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  openSnackBarSuccess(): void {
    this._snackBar.open(this.successMsg, 'Cerrar',{
      duration: 10000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
