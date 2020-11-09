import { Component, OnInit, Input } from '@angular/core';
import { Noticia } from 'src/app/Interfaces/noticia';

@Component({
  selector: 'app-hoy',
  templateUrl: './hoy.component.html',
  styleUrls: ['./hoy.component.scss']
})
export class HoyComponent implements OnInit {

  @Input() par: any;
  panelOpenState = false;
  public noticias : Noticia[] = [
    {id : '',autor : 'Pepe',noticia : 'CRONChaquetillas',entradilla : 'probaros las tallas ya mismo',
    cuerpo : 'Vamos comprar unas chaquetillas en el Decathlon, modelo Forclaz 900 Soft color negro. M&aacute;s info en el foro.',fecha : '03/06/2019'},
    {id : '',autor : 'Pepe',noticia : 'CRONChaquetillas',entradilla : 'probaros las tallas ya mismo',
    cuerpo : 'Vamos comprar unas chaquetillas en el Decathlon, modelo Forclaz 900 Soft color negro. M&aacute;s info en el foro.',fecha : '03/06/2019'},
    {id : '',autor : 'Pepe',noticia : 'CRONChaquetillas',entradilla : 'probaros las tallas ya mismo',
    cuerpo : 'Vamos comprar unas chaquetillas en el Decathlon, modelo Forclaz 900 Soft color negro. M&aacute;s info en el foro.',fecha : '03/06/2019'},
    {id : '',autor : 'Pepe',noticia : 'CRONChaquetillas',entradilla : 'probaros las tallas ya mismo',
    cuerpo : 'Vamos comprar unas chaquetillas en el Decathlon, modelo Forclaz 900 Soft color negro. M&aacute;s info en el foro.',fecha : '03/06/2019'},
    {id : '',autor : 'Pepe',noticia : 'CRONChaquetillas',entradilla : 'probaros las tallas ya mismo',
    cuerpo : 'Vamos comprar unas chaquetillas en el Decathlon, modelo Forclaz 900 Soft color negro. M&aacute;s info en el foro.',fecha : '03/06/2019'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
