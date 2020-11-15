import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Views/home/home.component';
import { BrujulinesComponent } from './Views/brujulines/brujulines.component';
import { OrientacionComponent } from './Views/orientacion/orientacion.component';
import { MapasComponent } from './Views/mapas/mapas.component';
import { RaidComponent } from './Views/raid/raid.component';
import { ClubComponent } from './Views/club/club.component';
import { ListadonoticiasComponent } from './Views/listadonoticias/listadonoticias.component';
import { EnlacesComponent } from './Views/enlaces/enlaces.component';
import { AdministracionComponent } from './Views/administracion/administracion.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'brujulines', component: BrujulinesComponent },
  { path: 'orientacion', component: OrientacionComponent },
  { path: 'mapas', component: MapasComponent },
  { path: 'raid', component: RaidComponent },
  { path: 'club', component: ClubComponent },
  { path: 'noticias', component: ListadonoticiasComponent },
  { path: 'enlaces', component: EnlacesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdministracionComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
