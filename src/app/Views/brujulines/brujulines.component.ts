import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-brujulines',
  templateUrl: './brujulines.component.html',
  styleUrls: ['./brujulines.component.scss']
})
export class BrujulinesComponent implements OnInit {

  @Input() valor: string;
  
  constructor() { }

  ngOnInit(): void {
    this.valor = 'areas';
  }

}
