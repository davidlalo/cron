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

  checked : boolean;
  hide = true;
  datosSubscription: Subscription;
  updateSubscription: Subscription;
  changeSubscription: Subscription;
  datosForm = new FormGroup({
    nombre : new FormControl(''),
    nombreC : new FormControl(''),
    correo : new FormControl(''),
    orden : new FormControl(''),
    categoria : new FormControl(''),
    sportident : new FormControl(''),
    descripcion : new FormControl(''),
    password : new FormControl('')
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
        this.checked = response.orden==='0'?true:false;
        this.datosForm.setValue({
          nombre:response.nombre,
          nombreC:response.nombre_completo,
          correo:response.email,
          orden:response.orden,
          categoria:response.categoria,
          sportident:response.sportident,
          descripcion:response.descripcion,
          password:''
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
          this.getMisDatos();
        }else{
          this._snackBar.open("No se han podido actualizar tus datos", "Error", {
            duration: 2000,
          });
        }
      }
    )
  }

  cambiarPass(){
    const id = this.authService.userLoggedIn.idUsuario;
    const pass = this.datosForm.get('password').value;
    if(pass != ''){
      this.updateSubscription = this.llamadas.changePass(id,pass).subscribe(
        (response:any) => {
          if(response===0){
            this._snackBar.open("Tu contraseña se ha actualizado correctamente", "OK", {
              duration: 2000,
            });
            this.getMisDatos();
          }else{
            this._snackBar.open("No se ha podido actualizar tu contraseña", "Error", {
              duration: 2000,
            });
          }
        }
      )
    }else{
      this._snackBar.open("Debe introducir un valor en el campo Nueva contraseña", "Error", {
        duration: 2000,
      });
    }
  }

  ngOnDestroy(){
    if(!this.datosSubscription.closed){
      this.datosSubscription.unsubscribe();
    }
    if(this.updateSubscription!=undefined && !this.updateSubscription.closed){
      this.updateSubscription.unsubscribe();
    }
    if(this.changeSubscription!=undefined && !this.changeSubscription.closed){
      this.changeSubscription.unsubscribe();
    }
  }
}
