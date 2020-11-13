import { Component, OnInit, Input } from '@angular/core';
import { Noticia } from 'src/app/Interfaces/noticia';
import { LlamadasService } from '../../../Services/llamadas.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hoy',
  templateUrl: './hoy.component.html',
  styleUrls: ['./hoy.component.scss']
})
export class HoyComponent implements OnInit {

  @Input() par: any;
  panelOpenState = false;
  noticias : Noticia[];
  noticiasSubscription: Subscription;
  constructor(private llamadas: LlamadasService) { 
    this.noticias = [];
  }

  ngOnInit(): void {
    this.getNoticias()
  }

  getNoticias(){
    this.noticiasSubscription = this.llamadas.getNoticias(this.par).subscribe(
      (response) => {
        this.noticias = response;
      },
      (error) => {console.log("Error Lalo: " + error);}
    )
  }

  ngOnDestroy(){
    if(!this.noticiasSubscription.closed){
      this.noticiasSubscription.unsubscribe();
    }
  }
}
