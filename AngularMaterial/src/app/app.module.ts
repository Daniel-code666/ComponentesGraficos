import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { VehiculoComponent } from './pages/vehiculo/vehiculo.component';
import { RegistrarVehiculoComponent } from './pages/vehiculo/registrar-vehiculo/registrar-vehiculo.component';
import { EditarVehiculoComponent } from './pages/vehiculo/editar-vehiculo/editar-vehiculo.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

import { ErrorInterceptorService } from 'src/app/_share/error-interceptor.service';
import { IndexComponent } from './pages/index/index.component';
import { Error500Component } from './pages/error500/error500.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    BuscarComponent,
    TablaComponent,
    DepartamentoComponent,
    CiudadComponent,
    VehiculoComponent,
    RegistrarVehiculoComponent,
    EditarVehiculoComponent,
    NotFoundComponent,
    IndexComponent,
    Error500Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModuleModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
