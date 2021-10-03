import { Component, OnInit } from '@angular/core';
import { Vehiculo } from 'src/app/_model/vehiculo';
import { VehiculoService } from 'src/app/_service/vehiculo.service';

@Component({
  selector: 'app-registrar-vehiculo',
  templateUrl: './registrar-vehiculo.component.html',
  styleUrls: ['./registrar-vehiculo.component.css']
})
export class RegistrarVehiculoComponent implements OnInit {

  constructor(private VehService: VehiculoService) { }

  ngOnInit(): void {
  }

  insertVehiculo(form): void{
    const v: Vehiculo = new Vehiculo();

    v.placa = form.placa;
    v.marca = form.marca;
    v.modelo = form.modelo;
    v.tipoVehiuclo = form.tipoVehiculo;
    v.capacidad = form.capacidad;

    this.VehService.guardar(v).subscribe(data =>{
      console.log('Se registró el vahículo');
    });
  }
}
