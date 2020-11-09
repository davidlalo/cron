import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
  

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.solicitudForm.value);
  }

  irListado() {
    console.warn(this.solicitudForm.value);
  }
}
