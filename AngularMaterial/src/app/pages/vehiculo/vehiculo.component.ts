import { Component, OnInit } from '@angular/core';
import { VehiculoService } from '../../_service/vehiculo.service';
import { Vehiculo } from 'src/app/_model/vehiculo';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent implements OnInit {

  constructor(private VehService: VehiculoService) { }

  ngOnInit(): void {

    let v: Vehiculo = new Vehiculo();
    v.placa = "abc-103";
    v.marca = "Ford";
    v.modelo = "1999";
    v.tipoVehiuclo = "Carga";
    v.capacidad = "40Kg";

    this.VehService.guardar(v).subscribe(data =>{
      console.log('Se registró el vahículo');
    });
  }
}
