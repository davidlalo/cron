import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './Components/cabecera/cabecera.component';
import { MenuComponent } from './Menu/menu/menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Modules
import { MaterialModule } from './Modules/material/material.module';
import { SubmenuComponent } from './Menu/submenu/submenu.component';
import { CalendarioComponent } from './Components/home/calendario/calendario.component';
import { TwitterComponent } from './Components/home/twitter/twitter.component';
import { FacebookComponent } from './Components/home/facebook/facebook.component';
import { NoticiasComponent } from './Components/home/noticias/noticias.component';
import { HomeComponent } from './Views/home/home.component';
import { BrujulinesComponent } from './Views/brujulines/brujulines.component';
import { OrientacionComponent } from './Views/orientacion/orientacion.component';
import { MapasComponent } from './Views/mapas/mapas.component';
import { RaidComponent } from './Views/raid/raid.component';
import { ClubComponent } from './Views/club/club.component';
import { EnlacesComponent } from './Views/enlaces/enlaces.component';
import { AdministracionComponent } from './Views/administracion/administracion.component';
import { PresentacionComponent } from './Components/brujulines/presentacion/presentacion.component';
import { TecnicosComponent } from './Components/brujulines/tecnicos/tecnicos.component';
import { ObjetivosComponent } from './Components/brujulines/objetivos/objetivos.component';
import { AreasComponent } from './Components/brujulines/areas/areas.component';
import { NivelesComponent } from './Components/brujulines/niveles/niveles.component';
import { QueComponent } from './Components/orientacion/que/que.component';
import { PrimeraComponent } from './Components/orientacion/primera/primera.component';
import { HojaComponent } from './Components/orientacion/hoja/hoja.component';
import { DescargasComponent } from './Components/orientacion/descargas/descargas.component';
import { LoginComponent } from './Components/administracion/login/login.component';
import { PrincipalComponent } from './Components/mapas/principal/principal.component';
import { ListadoComponent } from './Components/mapas/listado/listado.component';
import { SolicitudComponent } from './Components/mapas/solicitud/solicitud.component';
import { ColemapaComponent } from './Components/mapas/colemapa/colemapa.component';
import { HoyComponent } from './Components/noticias/hoy/hoy.component';
import { ListadonoticiasComponent } from './Views/listadonoticias/listadonoticias.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    MenuComponent,
    SubmenuComponent,
    CalendarioComponent,
    TwitterComponent,
    FacebookComponent,
    NoticiasComponent,
    HomeComponent,
    BrujulinesComponent,
    OrientacionComponent,
    MapasComponent,
    RaidComponent,
    ClubComponent,
    EnlacesComponent,
    AdministracionComponent,
    PresentacionComponent,
    TecnicosComponent,
    ObjetivosComponent,
    AreasComponent,
    NivelesComponent,
    QueComponent,
    PrimeraComponent,
    HojaComponent,
    DescargasComponent,
    LoginComponent,
    PrincipalComponent,
    ListadoComponent,
    SolicitudComponent,
    ColemapaComponent,
    HoyComponent,
    ListadonoticiasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
