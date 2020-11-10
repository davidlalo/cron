import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapas',
  templateUrl: './mapas.component.html',
  styleUrls: ['./mapas.component.scss']
})
export class MapasComponent implements OnInit {

  public valor : string;

  constructor() { 
    
  }

  ngOnInit(): void {
    this.valor = 'principal';
  }

  val(value:string){
    this.valor = value;
  }

}
