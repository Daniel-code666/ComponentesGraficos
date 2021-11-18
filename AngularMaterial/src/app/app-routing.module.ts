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
import { UnauthorizedComponent } from 'src/app/pages/unauthorized/unauthorized.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { GuardianService } from 'src/app/_share/guardian.service';
import { RegistrarusuarioComponent } from './pages/usuario/registrarusuario/registrarusuario.component';
import { ConductorComponent } from './pages/conductor/conductor.component';
import { AsociarComponent } from './pages/vehiculo/asociar/asociar.component';
import { PaisComponent } from './pages/pais/pais.component';
import { EditarUsuarioComponent } from './pages/usuario/editar-usuario/editar-usuario.component';
import { ConductoresAsociadosComponent } from './pages/vehiculo/conductores-asociados/conductores-asociados.component';
import { ConductoresNoAsociadosComponent } from './pages/vehiculo/conductores-no-asociados/conductores-no-asociados.component';

const routes: Routes = [
  { path: '', component: IndexComponent},
  { path: 'login', component: LoginComponent},
  { path: 'registro', component: RegistroComponent},
  { path: 'buscar', component: BuscarComponent},
  { path: 'tabla', component: TablaComponent },
  { path: 'departamento', component: DepartamentoComponent, canActivate: [GuardianService], children:
    [
      { path: 'ciudad/:idDep', component: CiudadComponent, canActivate: [GuardianService]}
    ]
  },
  { path: 'vehiculo', component: VehiculoComponent, canActivate: [GuardianService], children:
    [
      { path: 'registrar-vehiculo', component: RegistrarVehiculoComponent, canActivate: [GuardianService]},
      { path: 'editar-vehiculo/:idVehiculo', component: EditarVehiculoComponent, canActivate: [GuardianService]},
      { path: 'asociar', component: AsociarComponent, canActivate: [GuardianService]},
      { path: 'conductores-asociados/:idVehiculo', component: ConductoresAsociadosComponent, canActivate: [GuardianService]},
      { path: 'conductores-no-asociados/:idVehiculo', component: ConductoresNoAsociadosComponent, canActivate: [GuardianService]}
    ]
  },
  { path: 'unauthorized', component: UnauthorizedComponent },
  { path: 'error500', component: Error500Component},
  { path: 'usuario', component: UsuarioComponent, canActivate: [GuardianService], children:
    [
      { path: 'registrarusuario', component: RegistrarusuarioComponent, canActivate: [GuardianService]},
      { path: 'editarusuario/:idUsuario', component: EditarUsuarioComponent, canActivate: [GuardianService]}
    ]
  },
  { path: 'conductor', component: ConductorComponent, canActivate: [GuardianService]},
  { path: 'pais', component: PaisComponent, canActivate: [GuardianService]},
  { path: '**', component: NotFoundComponent}
  // { path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
