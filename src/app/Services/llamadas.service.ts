import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

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

  public getNoticias = function(param){
    const url = "http://orientacron.es/restapi/news.php?param="+param;
    //const url = "http://localhost/CRON/restapi/news.php?param="+param;
    this.respuesta = this.http.get(url);
    return this.respuesta;
  }
}
