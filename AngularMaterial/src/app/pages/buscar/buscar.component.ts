import { Component, OnInit } from '@angular/core';
import { Departamento } from 'src/app/_model/departamento';
import { DepartamentoService } from '../../_service/departamento.service';
import { LoaderService } from '../../loader/loader.service';
import { Ciudad } from 'src/app/_model/ciudad';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  displayedColumns: string[] = ['idDepartamento', 'nombre', 'ciudades'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  depList: Departamento[] = [];
  dataSource = [];

  displayedColumnsC: string[] = ['idCiudad', 'nombre'];
  columnsToDisplayC: string[] = this.displayedColumnsC.slice();
  ciudadList: Ciudad[] = [];
  dataSourceCiudad: any[] = [];

  constructor(private departService: DepartamentoService, public loadService: LoaderService) { }

  ngOnInit(): void {
    this.depList = [];
    this.departService.list().subscribe(data => {
      data.forEach(element => {
        this.depList.push({idDepartamento: element.idDepartamento, nombre: element.nombre});
        console.log(`Código: ${element.idDepartamento} - Nombre ${element.nombre}`);
      });
      this.dataSource = this.depList;
    });
  }

  cargarCiudad(idDepartamento): void {
    this.departService.listCiudades(idDepartamento).subscribe(data => {
      data.forEach(element => {
        this.ciudadList.push({idCiudad: element.idCiudad, nombre: element.nombre});
      });
      this.dataSourceCiudad = this.ciudadList;
      console.log(this.dataSourceCiudad);
    });
    this.dataSourceCiudad = [];
    this.ciudadList = [];
  }
}
