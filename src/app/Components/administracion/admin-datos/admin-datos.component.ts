import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LlamadasService } from '../../../Services/llamadas.service';
import { Subscription } from 'rxjs';
import { AuthService } from '../../../auth/auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Miembro } from 'src/app/Interfaces/miembro';

@Component({
  selector: 'app-admin-datos',
  templateUrl: './admin-datos.component.html',
  styleUrls: ['./admin-datos.component.scss']
})
export class AdminDatosComponent implements OnInit {

  datosSubscription: Subscription;
  updateSubscription: Subscription;
  datosForm = new FormGroup({
    nombre : new FormControl(''),
    nombreC : new FormControl(''),
    correo : new FormControl(''),
    orden : new FormControl(''),
    categoria : new FormControl(''),
    sportident : new FormControl(''),
    descripcion : new FormControl('')
  });
  miembro : Miembro;

  constructor(private llamadas: LlamadasService, public authService: AuthService, private _snackBar: MatSnackBar) {
    this.miembro = {
      id : "",
      nombre : "",
      nombre_completo : "",
      email : "",
      categoria : "",
      sportident : "",
      descripcion : "",
      orden : ""
    }
   }

  ngOnInit(): void {
    this.getMisDatos();
  }

  getMisDatos(){
    this.datosSubscription = this.llamadas.getMiembro(this.authService.userLoggedIn.id).subscribe(
      (response:Miembro) => {
        this.datosForm.setValue({
          nombre:response.nombre,
          nombreC:response.nombre_completo,
          correo:response.email,
          orden:response.orden,
          categoria:response.categoria,
          sportident:response.sportident,
          descripcion:response.descripcion
        });
      }
    )  
  }

  onSubmit(){
    this.miembro.id=this.authService.userLoggedIn.id;
    this.miembro.nombre=this.datosForm.get('nombre').value;
    this.miembro.nombre_completo=this.datosForm.get('nombreC').value;
    this.miembro.email=this.datosForm.get('correo').value;
    this.miembro.orden=this.datosForm.get('orden').value;
    this.miembro.categoria=this.datosForm.get('categoria').value;
    this.miembro.sportident=this.datosForm.get('sportident').value;
    this.miembro.descripcion=this.datosForm.get('descripcion').value;
    this.updateSubscription = this.llamadas.updateMiembro(this.miembro).subscribe(
      (response:any) => {
        if(response===0){
          this._snackBar.open("Tus datos se han actualizado correctamente", "OK", {
            duration: 2000,
          });
          
        }else{
          this._snackBar.open("No se han podido actualizar tus datos", "Error", {
            duration: 2000,
          });
        }
      }
    )
  }
  ngOnDestroy(){
    if(!this.datosSubscription.closed){
      this.datosSubscription.unsubscribe();
    }
    if(this.updateSubscription!=undefined && !this.updateSubscription.closed){
      this.updateSubscription.unsubscribe();
    }
  }
}
