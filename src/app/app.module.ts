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
import { LoginComponent } from './auth/login/login.component';
import { PrincipalComponent } from './Components/mapas/principal/principal.component';
import { ListadoComponent } from './Components/mapas/listado/listado.component';
import { SolicitudComponent } from './Components/mapas/solicitud/solicitud.component';
import { ColemapaComponent } from './Components/mapas/colemapa/colemapa.component';
import { HoyComponent } from './Components/noticias/hoy/hoy.component';
import { ListadonoticiasComponent } from './Views/listadonoticias/listadonoticias.component';
import { AdminNoticiasComponent } from './Components/administracion/admin-noticias/admin-noticias.component';
import { AdminDatosComponent } from './Components/administracion/admin-datos/admin-datos.component';
import { AdminEnlacesComponent } from './Components/administracion/admin-enlaces/admin-enlaces.component';
import { AdminCorreosComponent } from './Components/administracion/admin-correos/admin-correos.component';
import { AdminPassComponent } from './Components/administracion/admin-pass/admin-pass.component';
import { AdminMapasComponent } from './Components/administracion/admin-mapas/admin-mapas.component';
import { ListadoEnlacesComponent } from './Components/enlaces/listado-enlaces/listado-enlaces.component';
import { NuestroComponent } from './Components/club/nuestro/nuestro.component';
import { GuiaComponent } from './Components/club/guia/guia.component';
import { InicioComponent } from './Components/raid/inicio/inicio.component';
import { PrimerRaidComponent } from './Components/raid/primer-raid/primer-raid.component';
import { ProgramaComponent } from './Components/raid/programa/programa.component';
import { NormativaComponent } from './Components/raid/normativa/normativa.component';
import { InformacionComponent } from './Components/raid/informacion/informacion.component';
import { BoletinesComponent } from './Components/raid/boletines/boletines.component';
import { InscripcionesComponent } from './Components/raid/inscripciones/inscripciones.component';
import { ClasificacionesComponent } from './Components/raid/clasificaciones/clasificaciones.component';
import { LinksComponent } from './Components/home/links/links.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    MenuComponent,
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
    ListadonoticiasComponent,
    AdminNoticiasComponent,
    AdminDatosComponent,
    AdminEnlacesComponent,
    AdminCorreosComponent,
    AdminPassComponent,
    AdminMapasComponent,
    ListadoEnlacesComponent,
    NuestroComponent,
    GuiaComponent,
    InicioComponent,
    PrimerRaidComponent,
    ProgramaComponent,
    NormativaComponent,
    InformacionComponent,
    BoletinesComponent,
    InscripcionesComponent,
    ClasificacionesComponent,
    LinksComponent
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
