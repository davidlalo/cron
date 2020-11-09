import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listadonoticias',
  templateUrl: './listadonoticias.component.html',
  styleUrls: ['./listadonoticias.component.scss']
})
export class ListadonoticiasComponent implements OnInit {

  public valor : string;
  
  constructor() { }

  ngOnInit(): void {
    this.valor = 'hoy';
  }

  val(value:string){
    this.valor = value;
  }

}
