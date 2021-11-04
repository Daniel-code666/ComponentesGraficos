import { HostListener, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginService } from '../_service/login.service';
import { interval, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GuardianService implements CanActivate{

  userActivity: number;
  userInactive: Subject<any> = new Subject();

  constructor(private login: LoginService, private route: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
              boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    console.log('entró al guardián');

    if (this.login.isLogged() === true){

      const helper = new JwtHelperService();

      const tk = sessionStorage.getItem(environment.TOKEN);

      if (!helper.isTokenExpired(tk)){
        const decodedToken = helper.decodeToken(tk);
        const rol = decodedToken.authorities[0];
        const url = state.url;

        

        if (url.includes('usuario') && rol === 'Administrador'){
          return true;
        } else if (url.includes('vehiculo') && rol === 'Administrador'){
          return true;
        } else if (url.includes('departamento') && rol === 'Administrador'){
          return true;
        } else {
          this.route.navigate(['/unauthorized']);
          return false;
        }

        return true;
      }else{
        // this.login.logOut();
        sessionStorage.clear();
        return false;
      }

      return true;
    } else {
      this.route.navigate(['/unauthorized']);
      return false;
    }
  }

  setTimeout(): void {
    this.userActivity = setTimeout(() => this.userInactive.next(undefined), 3000);
  }

  @HostListener('window:onmousemove') refreshUserState(): boolean{
    console.log('se movió el maus');
    return true;
  }

  // @HostListener('window:mousemove') refreshUserState(): void {
  //   clearTimeout(this.userActivity);
  //   this.setTimeout();
  // }
}
