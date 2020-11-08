import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Output() submenu : EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  sub(numero:any){
    this.submenu.emit(numero);
  }

}
