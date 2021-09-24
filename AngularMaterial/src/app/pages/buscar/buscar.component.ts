import { Component, OnInit, ViewChild} from '@angular/core';
import { Departamento } from 'src/app/_model/departamento';
import { DepartamentoService } from '../../_service/departamento.service';
import { LoaderService } from '../../loader/loader.service';
import { Ciudad } from 'src/app/_model/ciudad';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css'],
})
export class BuscarComponent implements OnInit {

  displayedColumns: string[] = ['idDepartamento', 'nombre', 'ciudades'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  depList: Departamento[] = [];
  dataSource = new MatTableDataSource([]);

  displayedColumnsC: string[] = ['idCiudad', 'nombre'];
  columnsToDisplayC: string[] = this.displayedColumnsC.slice();
  ciudadList: Ciudad[] = [];
  dataSourceCiudad = new MatTableDataSource([]);

  show = false;
  buttonName = 'Mostrar tabla';

  @ViewChild('citiesPaginator') paginator: MatPaginator;
  @ViewChild('categoryPaginator') categoryPaginator: MatPaginator;

  constructor(private departService: DepartamentoService, public loadService: LoaderService) { }

  ngOnInit(): void {
    this.departService.list().subscribe(data => {
      data.forEach(element => {
        this.depList.push({idDepartamento: element.idDepartamento, nombre: element.nombre});
        console.log(`Código: ${element.idDepartamento} - Nombre ${element.nombre}`);
        // this.dataSource = new MatTableDataSource(data);
      });
      this.dataSource.data = this.depList;
      this.dataSource.paginator = this.categoryPaginator;
      this.depList = [];
    });
  }

  // ngAfterViewInit(): void{
  //   this.dataSourceCiudad.paginator = this.paginator;
  //   this.dataSource.paginator = this.categoryPaginator;
  // }

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
    this.show = true;
    this.buttonName = 'Ocultar tabla';
  }

  esconderTabla(): void{
    this.show = !this.show;

    if(this.show)
    {
      this.buttonName = 'Ocultar tabla';
    }else{
      this.buttonName = 'Mostrar tabla';
    }
  }
}
