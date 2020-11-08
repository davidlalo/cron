import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cron';
  public submenu : any;
  public valor : string;

  sub(numero:any){
    this.submenu = numero;
  }

  val(value:string){
    this.valor = value;
  }
}
