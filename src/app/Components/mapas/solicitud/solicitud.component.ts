import { Component, OnInit } from '@angular/core';
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
  

  mapas : Mapa[];
  mapasSubscription: Subscription;
  constructor(private llamadas: LlamadasService) { 
    this.mapas = [];
  }

  ngOnInit(): void {
    this.getMapas();
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.solicitudForm.value);
  }

  irListado() {
    console.warn(this.solicitudForm.get('numero').invalid);
  }

  getErrorMessage() {
    if (this.solicitudForm.get('email').hasError('required')) {
      return 'You must enter a value';
    }

    return this.solicitudForm.get('email').hasError('email') ? 'Not a valid email' : '';
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
