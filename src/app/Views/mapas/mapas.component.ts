import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapas',
  templateUrl: './mapas.component.html',
  styleUrls: ['./mapas.component.scss']
})
export class MapasComponent implements OnInit {

  public valor : string;

  constructor() { 
    this.valor = 'principal';
  }

  ngOnInit(): void {
    
  }

  val(value:string){
    this.valor = value;
  }

}
