import { Component, OnInit } from '@angular/core';
import { LlamadasService } from '../../../Services/llamadas.service';
import { Subscription, Observable, of } from 'rxjs';
import { Enlace } from '../../../Interfaces/enlace';

@Component({
  selector: 'app-listado-enlaces',
  templateUrl: './listado-enlaces.component.html',
  styleUrls: ['./listado-enlaces.component.scss']
})
export class ListadoEnlacesComponent implements OnInit {

  public enlaces : Enlace[];
  public autores : string[] = [];
  enlaceSubscription: Subscription;
  constructor(private llamadas: LlamadasService) { }

  ngOnInit(): void {
    this.getEnlaces();   
  }

  getEnlaces(){
    this.enlaceSubscription = this.llamadas.getEnlaces().subscribe(
      (response:Enlace[]) => {
        this.enlaces = response;
        this.getAutores();
      }
    )
  }

  getAutores(){
    var autor : string = '';
    var i : number = 0;
    for(i;i<this.enlaces.length;i++){
      if(this.enlaces[i].autor!=autor){
        this.autores.push(this.enlaces[i].autor);
        autor = this.enlaces[i].autor;
      }
    }
  }

  ngOnDestroy(){
    if(!this.enlaceSubscription.closed){
      this.enlaceSubscription.unsubscribe();
    }
  }
}
