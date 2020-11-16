import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Mapa } from '../../../Interfaces/mapa';
import { LlamadasService } from '../../../Services/llamadas.service';
import { Subscription } from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Solicitud } from '../../../Interfaces/solicitud';
import { formatDate} from '@angular/common';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

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
  solicitudSubscription: Subscription;
  sol : Solicitud;
  mensaje : string;

  constructor(private llamadas: LlamadasService, private _snackBar: MatSnackBar, public dialog: MatDialog) { 
    this.mapas = [];
    this.sol = {
      id : "",
      solicitante : "",
      responsable : "",
      email : "",
      telefono : "",
      otros : "",
      mapa : "",
      actividad : "",
      f_inicio : "",
      f_fin : "",
      participantes : "",
      formato : "",
      concedido : ""
  }
  }

  ngOnInit(): void {
    this.getMapas();
  }

  onSubmit() {
    if(this.solicitudForm.get('mapa').value===this.nombre){
      this.sol.mapa = this.id;
    }else{
      this.sol.mapa = this.solicitudForm.get('mapa').value;
    }

    this.sol.solicitante=this.solicitudForm.get('solicitante').value;
    this.sol.responsable=this.solicitudForm.get('responsable').value;
    this.sol.email=this.solicitudForm.get('email').value;
    this.sol.telefono=this.solicitudForm.get('telefono').value;
    this.sol.actividad=this.solicitudForm.get('actividad').value;
    this.sol.f_inicio=formatDate(this.solicitudForm.get('fini').value,'dd/MM/yyyy','en-US');
    this.sol.f_fin=formatDate(this.solicitudForm.get('ffin').value,'dd/MM/yyyy','en-US');
    this.sol.participantes=this.solicitudForm.get('numero').value;
    this.sol.formato=this.solicitudForm.get('formato').value;
    this.sol.otros=this.solicitudForm.get('otros').value;

    this.solicitudSubscription = this.llamadas.enviarSolicitud(this.sol).subscribe(
      (response) => {
        if(response===0){
          this.mensaje = "LA SOLICITUD SE HA REALIZADO CON ÉXITO. EN BREVE NOS PONDREMOS EN CONTACTO CON USTED";
        }else if(response===1){
          this.mensaje = "LA SOLICITUD SE HA GUARDADO CON ÉXITO, PERO NO SE HA PODIDO ENVIAR EL CORREO. PARA COMPLETAR LA SOLICITUD ENVÍA UN CORREO A info@orientacron.es INDICANDO TU NOMBRE";
        }else{
          this.mensaje = "NO SE HA PODIDO REALIZAR LA SOLICITUD. INTÉNTELO MÁS TARDE";
        }
        const dialogRef = this.dialog.open(DialogOverviewRespuestaDialog, {
          width: '450px',
          data: this.mensaje
        });
      }
    )
    this.valor.emit("principal");
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
      this.solicitudForm.setValue({mapa:this.nombre,solicitante:'',responsable:'',email:'',telefono:'',actividad:''
      ,fini:'',ffin:'',numero:'',formato:'',otros:'',acepto:false});
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
        this.setNombre();
      }
    )
  }

  ngOnDestroy(){
    if(!this.mapasSubscription.closed){
      this.mapasSubscription.unsubscribe();
    }
  }
}
@Component({
  selector: 'dialog-overview-respuesta-dialog',
  templateUrl: 'dialog-overview-respuesta-dialog.html',
})
export class DialogOverviewRespuestaDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewRespuestaDialog>,
    @Inject(MAT_DIALOG_DATA) public data: string) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
