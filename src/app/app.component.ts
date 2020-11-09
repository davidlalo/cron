import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cron';
  public submenu : any;
  

  sub(numero:any){
    this.submenu = numero;
  }
}
