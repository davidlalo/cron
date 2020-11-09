import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brujulines',
  templateUrl: './brujulines.component.html',
  styleUrls: ['./brujulines.component.scss']
})
export class BrujulinesComponent implements OnInit {

  public valor : string;
  
  constructor() { }

  ngOnInit(): void {
    this.valor = 'presentacion';
  }

  val(value:string){
    this.valor = value;
  }
}
