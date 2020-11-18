import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Solicitud } from '../Interfaces/solicitud';
import { Noticia } from '../Interfaces/noticia';

@Injectable({
  providedIn: 'root'
})
export class LlamadasService {

  public respuesta : any;
  constructor(private http: HttpClient) { }

  public getMapas = function(){
    const url = "http://orientacron.es/restapi/mapas.php";
    //const url = "http://localhost/CRON/restapi/mapas.php";
    this.respuesta = this.http.get(url);
    return this.respuesta;
  }

  public getNoticias = function(param:string){
    const url = "http://orientacron.es/restapi/news.php?param="+param;
    //const url = "http://localhost/CRON/restapi/news.php?param="+param;
    this.respuesta = this.http.get(url);
    return this.respuesta;
  }

  public acces = function(user:string,pass:string){
     const url = "http://orientacron.es/restapi/acces.php?usuario="+user+"&password="+pass;
     //const url = "http://localhost/CRON/restapi/acces.php?usuario="+user+"&password="+pass;
     this.respuesta = this.http.get(url);
     return this.respuesta;
  }

  public getEnlaces = function(){
    const url = "http://orientacron.es/restapi/enlaces.php";
    //const url = "http://localhost/CRON/restapi/enlaces.php";
    this.respuesta = this.http.get(url);
    return this.respuesta;
  }

  public enviarSolicitud = function(sol:Solicitud){
    const url = "http://orientacron.es/restapi/solicitud.php";
    //const url = "http://localhost/CRON/restapi/solicitud.php";
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
    const url = "http://orientacron.es/restapi/misnoticias.php";
    //const url = "http://localhost/CRON/restapi/misnoticias.php";
    var params = '?id='+id;
    this.respuesta = this.http.get(url+params);
    return this.respuesta;
  }

  public getNoticia(id:string){
    const url = "http://orientacron.es/restapi/noticia.php";
    //const url = "http://localhost/CRON/restapi/noticia.php";
    var params = '?id='+id;
    this.respuesta = this.http.get(url+params);
    return this.respuesta;
  }

  public deleteNoticia(id:string){
    const url = "http://orientacron.es/restapi/borrarnoticia.php";
    //const url = "http://localhost/CRON/restapi/borrarnoticia.php";
    var params = '?id='+id;
    this.respuesta = this.http.get(url+params);
    return this.respuesta;
  }

  public insertNoticia = function(not:Noticia){
    const url = "http://orientacron.es/restapi/insertarnoticia.php";
    //const url = "http://localhost/CRON/restapi/insertarnoticia.php";
    var params = '?user='+not.autor;
    params = params+'&titulo='+not.noticia;
    params = params+'&entradilla='+not.entradilla;
    params = params+'&cuerpo='+not.cuerpo;
    this.respuesta = this.http.get(url+params);
    return this.respuesta;
  }

  public updateNoticia = function(not:Noticia){
    const url = "http://orientacron.es/restapi/actualizarnoticia.php";
    //const url = "http://localhost/CRON/restapi/actualizarnoticia.php";
    var params = '?id='+not.id;
    params = params+'&titulo='+not.noticia;
    params = params+'&entradilla='+not.entradilla;
    params = params+'&cuerpo='+not.cuerpo;
    this.respuesta = this.http.get(url+params);
    return this.respuesta;
  }
}
