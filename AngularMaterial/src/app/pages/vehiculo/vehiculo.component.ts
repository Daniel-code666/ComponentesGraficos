import { Component, OnInit, ViewChild } from '@angular/core';
import { VehiculoService } from '../../_service/vehiculo.service';
import { Vehiculo } from 'src/app/_model/vehiculo';
import { ActivatedRoute } from '@angular/router';
import { LoaderService } from '../../loader/loader.service';
import { Paginas } from 'src/app/_model/paginas';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent implements OnInit {

  p: Paginas = new Paginas();

  page = 0;
  size = 3;

  displayedColumns: string[] = ['placa', 'modelo', 'marca', 'tipoVehiculo', 'capacidad', 'accion'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  depList: Vehiculo[] = [];
  dataSource = new MatTableDataSource([]);

  @ViewChild('vehiclePaginator') categoryPaginator: MatPaginator;

  constructor(private VehService: VehiculoService, public route: ActivatedRoute, public loadService: LoaderService) { }

  ngOnInit(): void {
    this.VehService.getVeh(this.page, this.size).subscribe(data => {

      console.log(data);
    });
  }
}
