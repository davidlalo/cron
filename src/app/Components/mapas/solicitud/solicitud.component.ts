import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Mapa } from '../../../Interfaces/mapa';
import { LlamadasService } from '../../../Services/llamadas.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.scss']
})
export class SolicitudComponent implements OnInit {

  @Input() id: string;
  @Output() valor : EventEmitter<string> = new EventEmitter();

  solicitudForm = new FormGroup({
    mapa : new FormControl('', [Validators.required]),
    solicitante : new FormControl('', [Validators.required]),
    responsable : new FormControl('', [Validators.required]),
    email : new FormControl('', [Validators.required, Validators.email]),
    telefono : new FormControl('', [Validators.required]),
    actividad : new FormControl('', [Validators.required]),
    fini : new FormControl('', [Validators.required]),
    ffin : new FormControl('', [Validators.required]),
    numero : new FormControl('', [Validators.required]),
    formato : new FormControl('', [Validators.required]),
    otros : new FormControl(''),
    acepto : new FormControl('', [Validators.requiredTrue])
  });
  
  nombre : string;
  mapas : Mapa[];
  mapasSubscription: Subscription;
  constructor(private llamadas: LlamadasService) { 
    this.mapas = [];
  }

  ngOnInit(): void {
    this.getMapas();
    this.setNombre;
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.solicitudForm.value);
  }

  val(value:string){
    this.valor.emit(value);
  }

  setNombre(){
    if(this.id!=undefined){
      var i:number; 
      for(i=0;i<this.mapas.length;i++){
        if(this.mapas[i].idmapa===this.id){
          this.nombre=this.mapas[i].denominacion;
        }
      }
    }
  }
  getErrorMessage() {
    if (this.solicitudForm.get('email').hasError('required')) {
      return 'Debe introducir un valor';
    }

    return this.solicitudForm.get('email').hasError('email') ? 'No es un email válido' : '';
  }

  getMapas(){
    this.mapasSubscription = this.llamadas.getMapas().subscribe(
      (response) => {
        this.mapas = response;
      },
      (error) => {console.log("Error Lalo: " + error);}
    )
  }

  ngOnDestroy(){
    if(!this.mapasSubscription.closed){
      this.mapasSubscription.unsubscribe();
    }
  }
}
