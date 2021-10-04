import { Component, OnInit, ViewChild } from '@angular/core';
import { Vehiculo } from 'src/app/_model/vehiculo';
import { VehiculoService } from 'src/app/_service/vehiculo.service';
import { Error } from 'src/app/_model/error_model';
import { LoaderService } from 'src/app/loader/loader.service';
import { FormGroup, FormBuilder, FormControl, Validator, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-registrar-vehiculo',
  templateUrl: './registrar-vehiculo.component.html',
  styleUrls: ['./registrar-vehiculo.component.css']
})
export class RegistrarVehiculoComponent implements OnInit {

  public error: Error;

  public successMsg: any;
  public errorMsg: string;

  form: FormGroup;

  @ViewChild('vehicleForm') myForm;

  constructor(private VehService: VehiculoService, public loadService: LoaderService,
    private formBuilder: FormBuilder) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  insertVehiculo(event: Event): void{

    event.preventDefault();

    const v: Vehiculo = new Vehiculo();

    v.placa = this.form.value.placa;
    v.marca = this.form.value.marca;
    v.modelo = this.form.value.modelo;
    v.tipoVehiuclo = this.form.value.tipoVehiculo;
    v.capacidad = this.form.value.capacidad;

    if (this.form.valid)
    {
      this.VehService.guardar(v).subscribe(success =>{
        console.log(success);
        this.successMsg = success;
        this.form.reset();
      }, error => {
        console.log(error);
        console.log(this.form);
        console.log(v);
        this.error = error;
      });
    }else{
      this.form.markAllAsTouched();
    }
  }

  private buildForm(){
    this.form = this.formBuilder.group(
      {
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
}
