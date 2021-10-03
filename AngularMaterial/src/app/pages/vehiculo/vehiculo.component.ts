import { Component, OnInit } from '@angular/core';
import { VehiculoService } from '../../_service/vehiculo.service';
import { Vehiculo } from 'src/app/_model/vehiculo';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent implements OnInit {

  constructor(private VehService: VehiculoService, public route: ActivatedRoute) { }

  ngOnInit(): void {

  }
}
