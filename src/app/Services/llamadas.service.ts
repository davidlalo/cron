import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Solicitud } from '../Interfaces/solicitud';
import { Noticia } from '../Interfaces/noticia';
import { Miembro } from '../Interfaces/miembro';
import { Mapa } from '../Interfaces/mapa';
import { Enlace } from '../Interfaces/enlace';

@Injectable({
  providedIn: 'root'
})
export class LlamadasService {

  //public host = "";
  //public host = "http://orientacron.es/";
  public host = "http://localhost/CRON/";
  public respuesta : any;
  constructor(private http: HttpClient) { }

  public getMapas = function(){
    const url = this.host + "restapi/mapas.php";
    this.respuesta = this.http.get(url);
    return this.respuesta;
  }

  public getNoticias = function(param:string){
    const url = this.host + "restapi/news.php?param="+param;
    this.respuesta = this.http.get(url);
    return this.respuesta;
  }

  public acces = function(user:string,pass:string){
    const url = this.host + "restapi/acces.php?usuario="+user+"&password="+pass;
     this.respuesta = this.http.get(url);
     return this.respuesta;
  }

  public getEnlaces = function(){
    const url = this.host + "restapi/enlaces.php";
    this.respuesta = this.http.get(url);
    return this.respuesta;
  }

  public insertEnlace = function(enl:Enlace){
    const url = this.host + "restapi/insertarenlace.php";
    var params = '?autor='+enl.autor;
    params = params+'&nombre='+enl.nombre;
    params = params+'&enlace='+enl.enlace;
    this.respuesta = this.http.get(url+params);
    return this.respuesta;
  }

  public enviarSolicitud = function(sol:Solicitud){
    const url = this.host + "restapi/solicitud.php";
    var params = '?solicitante='+sol.solicitante;
    params = params+'&responsable='+sol.responsable;
    params = params+'&email='+sol.email;
    params = params+'&telefono='+sol.telefono;
    params = params+'&otros='+sol.otros;
    params = params+'&mapa='+sol.mapa;
    params = params+'&actividad='+sol.actividad;
    params = params+'&f_inicio='+sol.f_inicio;
    params = params+'&f_fin='+sol.f_fin;
    params = params+'&participantes='+sol.participantes;
    params = params+'&formato='+sol.formato;
    this.respuesta = this.http.get(url+params);
    return this.respuesta;
  }

  public getMisNoticias(id:string){
    const url = this.host + "restapi/misnoticias.php";
    var params = '?id='+id;
    this.respuesta = this.http.get(url+params);
    return this.respuesta;
  }

  public getNoticia(id:string){
    const url = this.host + "restapi/noticia.php";
    var params = '?id='+id;
    this.respuesta = this.http.get(url+params);
    return this.respuesta;
  }

  public deleteNoticia(id:string){
    const url = this.host + "restapi/borrarnoticia.php";
    var params = '?id='+id;
    this.respuesta = this.http.get(url+params);
    return this.respuesta;
  }

  public insertNoticia = function(not:Noticia){
    const url = this.host + "restapi/insertarnoticia.php";
    var params = '?user='+not.autor;
    params = params+'&titulo='+not.noticia;
    params = params+'&entradilla='+not.entradilla;
    params = params+'&cuerpo='+not.cuerpo;
    this.respuesta = this.http.get(url+params);
    return this.respuesta;
  }

  public updateNoticia = function(not:Noticia){
    const url = this.host + "restapi/actualizarnoticia.php";
    var params = '?id='+not.id;
    params = params+'&titulo='+not.noticia;
    params = params+'&entradilla='+not.entradilla;
    params = params+'&cuerpo='+not.cuerpo;
    this.respuesta = this.http.get(url+params);
    return this.respuesta;
  }

  public getMiembros(){
    const url = this.host + "restapi/miembros.php";
    this.respuesta = this.http.get(url);
    return this.respuesta;
  }

  public getMiembro(id:string){
    const url = this.host + "restapi/miembro.php";
    var params = '?id='+id;
    this.respuesta = this.http.get(url+params);
    return this.respuesta;
  }

  public updateMiembro = function(miembro:Miembro){
    const url = this.host + "restapi/actualizarmiembro.php";
    var params = '?id='+miembro.id;
    params = params+'&mail='+miembro.email;
    params = params+'&nombre='+miembro.nombre;
    params = params+'&nom_completo='+miembro.nombre_completo;
    params = params+'&categoria='+miembro.categoria;
    params = params+'&sportident='+miembro.sportident;
    params = params+'&descripcion='+miembro.descripcion;
    params = params+'&orden='+miembro.orden;
    this.respuesta = this.http.get(url+params);
    return this.respuesta;
  }

  public getMapa(id:string){
    const url = this.host + "restapi/mapa.php";
    var params = '?id='+id;
    this.respuesta = this.http.get(url+params);
    return this.respuesta;
  }

  public insertMapa = function(map:Mapa){
    const url = this.host + "restapi/insertarmapa.php";
    var params = '?denominacion='+map.denominacion;
    params = params+'&autores='+map.autores;
    params = params+'&ent_patroc='+map.ent_patroc;
    params = params+'&num_RPI='+map.num_RPI;
    params = params+'&num_DL='+map.num_DL;
    params = params+'&num_RF='+map.num_RF;
    params = params+'&escala='+map.escala;
    params = params+'&tamano='+map.tamano;
    params = params+'&coordenadas_GPS='+map.coordenadas_GPS;
    params = params+'&ubicacion='+map.ubicacion;
    this.respuesta = this.http.get(url+params);
    return this.respuesta;
  }

  public updateMapa = function(map:Mapa){
    const url = this.host + "restapi/actualizarmapa.php";
    var params = '?id='+map.idmapa;
    params = params+'&denominacion='+map.denominacion;
    params = params+'&autores='+map.autores;
    params = params+'&ent_patroc='+map.ent_patroc;
    params = params+'&num_RPI='+map.num_RPI;
    params = params+'&num_DL='+map.num_DL;
    params = params+'&num_RF='+map.num_RF;
    params = params+'&escala='+map.escala;
    params = params+'&tamano='+map.tamano;
    params = params+'&coordenadas_GPS='+map.coordenadas_GPS;
    params = params+'&ubicacion='+map.ubicacion;
    this.respuesta = this.http.get(url+params);
    return this.respuesta;
  }

  public deleteMapa(id:string){
    const url = this.host + "restapi/borrarmapa.php";
    var params = '?id='+id;
    this.respuesta = this.http.get(url+params);
    return this.respuesta;
  }

  public getSolicitudes = function(){
    const url = this.host + "restapi/solicitudes.php";
    this.respuesta = this.http.get(url);
    return this.respuesta;
  }

  public updateSolicitud = function(id:string,concedido:string){
    const url = this.host + "restapi/actualizarsolicitud.php";
    var params = '?idsolicitud='+id;
    params = params+'&estado='+concedido;
    this.respuesta = this.http.get(url+params);
    return this.respuesta;
  }

  public changePass = function(id:string,pass:string){
    const url = this.host + "restapi/password.php";
    var params = '?id='+id;
    params = params+'&pass='+pass;
    this.respuesta = this.http.get(url+params);
    return this.respuesta;
  }
}
