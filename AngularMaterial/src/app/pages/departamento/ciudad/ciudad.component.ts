import { Component, OnInit, ViewChild } from '@angular/core';
import { Departamento } from 'src/app/_model/departamento';
import { DepartamentoService } from '../../../_service/departamento.service';
import { LoaderService } from '../../../loader/loader.service';
import { Ciudad } from 'src/app/_model/ciudad';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-ciudad',
  templateUrl: './ciudad.component.html',
  styleUrls: ['./ciudad.component.css']
})
export class CiudadComponent implements OnInit {

  displayedColumnsC: string[] = ['idCiudad', 'nombre'];
  columnsToDisplayC: string[] = this.displayedColumnsC.slice();
  ciudadList: Ciudad[] = [];
  dataSourceCiudad = new MatTableDataSource([]);

  @ViewChild('citiesPaginator') paginator: MatPaginator;

  constructor(private departService: DepartamentoService, public loadService: LoaderService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      let idDepartamento = params.idDep;
      this.cargarCiudad(idDepartamento);
    });
  }

  cargarCiudad(idDepartamento): void {
    this.departService.listCiudades(idDepartamento).subscribe(data => {
      data.forEach(element => {
        this.ciudadList.push({idCiudad: element.idCiudad, nombre: element.nombre});
      });
      this.dataSourceCiudad.data = this.ciudadList;
      this.dataSourceCiudad.paginator = this.paginator;
      console.log(this.dataSourceCiudad);
    });
    this.dataSourceCiudad.data = [];
    this.ciudadList = [];
  }

}
