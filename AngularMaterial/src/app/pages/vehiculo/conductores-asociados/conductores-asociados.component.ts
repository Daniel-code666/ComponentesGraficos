import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { LoaderService } from 'src/app/loader/loader.service';
import { Usuario } from 'src/app/_model/usuario';
import { UsuarioService } from 'src/app/_service/usuario.service';

@Component({
  selector: 'app-conductores-asociados',
  templateUrl: './conductores-asociados.component.html',
  styleUrls: ['./conductores-asociados.component.css']
})
export class ConductoresAsociadosComponent implements OnInit {

  public condAsociados: Usuario[] = [];

  displayedColumns: string[] = ['nombre', 'apellido', 'nick', 'documento', 'correo', 'rol', 'ciudad', 'ciudad2'];
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
    this.user.getUserAsociado(idVehiculo).subscribe(data => {
      data.forEach(element => {
        this.condAsociados.push(element);
      });
      this.dataSource.data = this.condAsociados;
      this.dataSource.paginator = this.paginator;
    });
    this.dataSource.data = [];
    this.condAsociados = [];
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
}
