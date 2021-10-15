import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { LoaderService } from '../_service/loader.service';
import { ErrorLogService, ResultJson } from 'src/app/_log/error-log.service';
import { Errores } from 'src/app/_model/error_model';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService implements HttpInterceptor {

  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  resultJson: ResultJson;
  ResultJsonString: any;

  constructor(private _snackBar: MatSnackBar, private router: Router, private loader: LoaderService, 
              private errorLog: ErrorLogService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Entró al interceptor');

    return next.handle(req).pipe(retry(environment.REINTENTOS)).pipe(tap(event => {
      if (event instanceof HttpResponse) {
        if (event.body && event.body.error === true && event.body.errorMessage){
          throw new Error(event.body.errorMessage);
        }
      }
    })).pipe(catchError((err) => {

      console.log(err);

      /* if (err.error instanceof ErrorEvent){
        let str = err.error.message;
        this.openSnackBar(str.slice(4, str.length));
      }else{
        this.router.navigate(['/error500']);
      } */
      this.loader.progressBarReactiva.next(true);
      const str = err.error.message;

      const statusCode = err.error.status.toString();

      if (statusCode.charAt(0) === '4'){
        this.openSnackBar(str.slice(4, str.length));
      } else if (statusCode.charAt(0) === '5'){
        this.router.navigate(['/error500']);

        this.errorLog.getText().subscribe((data: ResultJson) => {
            this.ResultJsonString = data;
            console.log(this.ResultJsonString);
          });

        let idError = 1;

        const errores: Errores = new Errores();
        errores.id_error = idError;
        errores.status_error = err.error.status;
        errores.error_msg = err.error.message;

        idError += 1;

        this.errorLog.postText(errores).subscribe(data => {
            console.log('done...');
          });
      }

      /* if (err.error.status === 400){
        this.openSnackBar(str.slice(4, str.length));
      } else if (err.error.status === 404) {
        this.openSnackBar(str.slice(4, str.length));
        this.openSnackBar(err.error.message);
      } else if (err.error.status === 405){
        this.openSnackBar(str.slice(4, str.length));
        this.openSnackBar(err.error.message);
      } else if (err.error.status === 415) {
        this.openSnackBar(str.slice(4, str.length));
        this.openSnackBar(err.error.message);
      } else if (err.error.status === 500) {
        this.router.navigate(['/error500']);
      } */
      return EMPTY;
    }));
  }

  openSnackBar(error: string): void {
    this._snackBar.open(error, 'Cerrar', {
      duration: 10000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

}
