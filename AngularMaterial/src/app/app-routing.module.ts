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

const routes: Routes = [
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
      { path: 'registrar-vehiculo', component: RegistrarVehiculoComponent}
    ]
  },
  { path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
