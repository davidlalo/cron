import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.scss']
})
export class SubmenuComponent implements OnInit {

  @Input() submenu: any;
  @Output() valor : EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  val(value:string){
    this.valor.emit(value);
  }
}
