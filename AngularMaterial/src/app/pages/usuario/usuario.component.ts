import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { LoaderService } from 'src/app/loader/loader.service';
import { Usuario } from 'src/app/_model/usuario';
import { UsuarioService, UserInfo } from 'src/app/_service/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  pageEvent: PageEvent;
  displayedColumns: string[] = ['nombre', 'apellido', 'nick', 'documento', 'correo', 'rol', 'ciudad', 'ciudad2', 'acciones'];
  columnsToDisplay: string[] = this.displayedColumns.slice();

  dataSource: UserInfo;
  userList = new MatTableDataSource<Usuario>([]);

  public page = 0;
  public size = 3;

  @ViewChild('userPaginator') userPaginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public loader: LoaderService, public route: ActivatedRoute, private userServ: UsuarioService) { }

  ngOnInit(): void {
    this.loadUserInfo();
  }

  private loadUserInfo(): void{
    this.userServ.getUsers(0, 3).pipe(
      tap(data => console.log(data)),
      map((uInfo: UserInfo) => this.dataSource = uInfo)
    ).subscribe(data => {
      this.userList = new MatTableDataSource(data.content);
      this.userList.sort = this.sort;
      // this.loader.progressBarReactiva.next(true);
    });
  }

  public deleteUser(idUsuario: number): void{
    console.log(idUsuario);
    this.userServ.deleteUser(idUsuario).subscribe(data => {
      console.log('Usuario eliminado');
      this.loadUserInfo();
    });
  }

  public onPaginateChange(event: PageEvent): void{
    this.page = event.pageIndex;
    this.size = event.pageSize;

    this.listUsers();
  }

  public listUsers(): void{
    this.userServ.getUsers(this.page, this.size).pipe(
      map((uInfo: UserInfo) => this.dataSource = uInfo)
    ).subscribe(data => {
      this.userList = new MatTableDataSource(data.content);
      this.userList.sort = this.sort;
    });
  }

  public doFilter = (value: string) => {
    this.userList.filter = value.trim().toLocaleLowerCase();
  }
}
