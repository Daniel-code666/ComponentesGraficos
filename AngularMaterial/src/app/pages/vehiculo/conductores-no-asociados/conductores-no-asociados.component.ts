import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { LoaderService } from 'src/app/loader/loader.service';
import { Usuario } from 'src/app/_model/usuario';
import { UsuarioService } from 'src/app/_service/usuario.service';

@Component({
  selector: 'app-conductores-no-asociados',
  templateUrl: './conductores-no-asociados.component.html',
  styleUrls: ['./conductores-no-asociados.component.css']
})
export class ConductoresNoAsociadosComponent implements OnInit {

  public condNoAsociados: Usuario[] = [];

  displayedColumns: string[] = ['nombre', 'apellido', 'documento'];
  columnsToDisplay: string[] = this.displayedColumns.slice();

  dataSource = new MatTableDataSource([]);

  @ViewChild('paginator') paginator: MatPaginator;

  constructor(private user: UsuarioService, public loader: LoaderService, private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const idVehiculo = params.idVehiculo;
      this.loadList(idVehiculo);
    });
  }

  private loadList(idVehiculo: number): void{
    this.user.getUserNoAsociado(idVehiculo).subscribe(data => {
      data.forEach(element => {
        this.condNoAsociados.push(element);
      });
      this.dataSource.data = this.condNoAsociados;
      this.dataSource.paginator = this.paginator;
    });
    this.dataSource.data = [];
    this.condNoAsociados = [];
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

}
