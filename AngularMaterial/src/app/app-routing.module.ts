import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { TablaComponent } from './pages/tabla/tabla.component';
import { DepartamentoComponent } from './pages/departamento/departamento.component';
import { CiudadComponent } from './pages/departamento/ciudad/ciudad.component';
import { VehiculoComponent } from './pages/vehiculo/vehiculo.component';
import { RegistrarVehiculoComponent } from './pages/vehiculo/registrar-vehiculo/registrar-vehiculo.component';
import { EditarVehiculoComponent } from './pages/vehiculo/editar-vehiculo/editar-vehiculo.component';
import { NotFoundComponent } from 'src/app/pages/not-found/not-found.component';
import { IndexComponent } from 'src/app/pages/index/index.component';
import { Error500Component } from 'src/app/pages/error500/error500.component';

const routes: Routes = [
  { path: '', component: IndexComponent},
  { path: 'login', component: LoginComponent},
  { path: 'registro', component: RegistroComponent},
  { path: 'buscar', component: BuscarComponent},
  { path: 'tabla', component: TablaComponent },
  { path: 'departamento', component: DepartamentoComponent, children:
    [
      { path: 'ciudad/:idDep', component: CiudadComponent}
    ]
  },
  { path: 'vehiculo', component: VehiculoComponent, children:
    [
      { path: 'registrar-vehiculo', component: RegistrarVehiculoComponent},
      { path: 'editar-vehiculo/:idVehiculo', component: EditarVehiculoComponent}
    ]
  },
  { path: 'error500', component: Error500Component},
  { path: '**', component: NotFoundComponent}
  // { path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
