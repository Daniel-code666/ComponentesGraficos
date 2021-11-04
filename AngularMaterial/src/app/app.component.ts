import { Component, HostListener, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { LoaderService } from 'src/app/_service/loader.service';
import { LoginService } from './_service/login.service';
import { GuardianService } from './_share/guardian.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit{

  public flagProgressBar = true;

  public isLogged: boolean;

  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(public route: ActivatedRoute, private loader: LoaderService,
              public login: LoginService, private router: Router, private guardian: GuardianService,
              // tslint:disable-next-line: variable-name
              private _snackBar: MatSnackBar) {
    this.progresValue = 0;
    this.rangeArray = new Array(100);
  }

  showFiller = false;

  progresValue: number;
  rangeArray: number[];

  title = 'AngularMaterial';

  isLoading = false;

  ngOnInit(): void {
    this.loader.progressBarReactiva.subscribe(data => {
      this.flagProgressBar = data;
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    // tslint:disable-next-line: one-variable-per-declaration
    const element = document.documentElement, body = document.body, scrollTop = 'scrollTop',
    scrollHeight = 'scrollHeight';
    this.progresValue = (element[scrollTop] || body[scrollTop]) /
    ((element[scrollHeight] || body[scrollHeight]) - element.clientHeight) * 100;
  }

  loadBar(): void {
    this.isLoading = true;
    setTimeout(() => { this.isLoading = false; }, 800);
  }

  logout(): void{
    this.login.logOut();
    this.openSnackBar('Sesión cerrada');
    this.guardian.stopFlag.unsubscribe();
    // this.router.navigate(['/']).then(() => { window.location.reload(); });
  }

  @HostListener('window:mousemove') refreshUserState(): void {
    clearTimeout(this.guardian.userActivity);
    this.guardian.setTimeout();
  }

  openSnackBar(error: string): void {
    this._snackBar.open(error, 'Cerrar', {
      duration: 10000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}



