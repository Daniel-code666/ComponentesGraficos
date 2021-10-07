import { Component, OnInit, ViewChild } from '@angular/core';
import { VehicleInfo, VehiculoService } from '../../_service/vehiculo.service';
import { Vehiculo } from 'src/app/_model/vehiculo';
import { ActivatedRoute } from '@angular/router';
import { LoaderService } from '../../loader/loader.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent implements OnInit {

  pageEvent: PageEvent;
  displayedColumns: string[] = ['idVehiculo', 'placa', 'modelo', 'marca', 'tipoVehiuclo', 'capacidad', 'accion'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  dataSource: VehicleInfo = null;
  // dataSource = new MatTableDataSource([]);

  @ViewChild('vehiclePaginator') categoryPaginator: MatPaginator;

  constructor(private VehService: VehiculoService, public route: ActivatedRoute, public loadService: LoaderService) { }

  ngOnInit(): void {
    this.loadVehicleInfo();
  }

  // tslint:disable-next-line: typedef
  private loadVehicleInfo(){
    this.VehService.getVehPag(0, 3).pipe(
      tap(data => console.log(data)),
      map((vehInfo: VehicleInfo) => this.dataSource = vehInfo)
    ).subscribe();
  }

  public onPaginateChange(event: PageEvent){
    let page = event.pageIndex;
    let size = event.pageSize;

    page = page + 1;

    this.VehService.getVehPag(page, size).pipe(
      map((vehInfo: VehicleInfo) => this.dataSource = vehInfo)
    ).subscribe();
  }
}
