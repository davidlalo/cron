import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Views/home/home.component';
import { BrujulinesComponent } from './Views/brujulines/brujulines.component';
import { OrientacionComponent } from './Views/orientacion/orientacion.component';
import { MapasComponent } from './Views/mapas/mapas.component';
import { RaidComponent } from './Views/raid/raid.component';
import { ClubComponent } from './Views/club/club.component';
import { NoticiasComponent } from './Views/noticias/noticias.component';
import { EnlacesComponent } from './Views/enlaces/enlaces.component';
import { AdministracionComponent } from './Views/administracion/administracion.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'brujulines', component: BrujulinesComponent },
  { path: 'orientacion', component: OrientacionComponent },
  { path: 'mapas', component: MapasComponent },
  { path: 'raid', component: RaidComponent },
  { path: 'club', component: ClubComponent },
  { path: 'noticias', component: NoticiasComponent },
  { path: 'enlaces', component: EnlacesComponent },
  { path: 'administracion', component: AdministracionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
