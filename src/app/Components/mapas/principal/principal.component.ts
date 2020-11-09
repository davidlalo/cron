import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  @Output() valor : EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  val(value:string){
    this.valor.emit(value);
  }

}
