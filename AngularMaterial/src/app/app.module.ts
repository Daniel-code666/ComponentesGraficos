import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { MaterialModuleModule } from './material-module/material-module.module';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { InterceptorService } from './loader/interceptor.service';
import { BuscarComponent } from './pages/buscar/buscar.component';

import {NgxPaginationModule} from 'ngx-pagination';

import { TablaComponent } from './pages/tabla/tabla.component';
import { CiudadComponent } from './pages/departamento/ciudad/ciudad.component';
import { DepartamentoComponent } from './pages/departamento/departamento.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    BuscarComponent,
    TablaComponent,
    DepartamentoComponent,
    CiudadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModuleModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass:InterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
