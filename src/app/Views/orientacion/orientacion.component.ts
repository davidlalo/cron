import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orientacion',
  templateUrl: './orientacion.component.html',
  styleUrls: ['./orientacion.component.scss']
})
export class OrientacionComponent implements OnInit {

  public valor : string;
  constructor() { }

  ngOnInit(): void {
    this.valor = 'que';
  }

  val(value:string){
    this.valor = value;
  }
}
