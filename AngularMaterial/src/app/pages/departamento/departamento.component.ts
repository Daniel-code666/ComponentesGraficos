import { Component, OnInit, ViewChild } from '@angular/core';
import { Departamento } from 'src/app/_model/departamento';
import { DepartamentoService } from '../../_service/departamento.service';
import { LoaderService } from '../../loader/loader.service';
import { Ciudad } from 'src/app/_model/ciudad';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.css']
})
export class DepartamentoComponent implements OnInit {

  displayedColumns: string[] = ['idDepartamento', 'nombre', 'ciudades'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  depList: Departamento[] = [];
  dataSource = new MatTableDataSource([]);

  @ViewChild('categoryPaginator') categoryPaginator: MatPaginator;

  constructor(private departService: DepartamentoService, public loadService: LoaderService,
    public route: ActivatedRoute) { }

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

  ngAfterViewInit() {
    this.dataSource.paginator = this.categoryPaginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
