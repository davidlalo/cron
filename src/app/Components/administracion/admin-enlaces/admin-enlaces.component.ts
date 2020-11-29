import { Component, OnInit } from '@angular/core';
import { LlamadasService } from '../../../Services/llamadas.service';
import { Subscription, Observable, of } from 'rxjs';
import { Enlace } from '../../../Interfaces/enlace';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-admin-enlaces',
  templateUrl: './admin-enlaces.component.html',
  styleUrls: ['./admin-enlaces.component.scss']
})
export class AdminEnlacesComponent implements OnInit {

  public enlaces : Enlace[];
  public autores : string[] = [];
  enlaceSubscription: Subscription;
  insertSubscription: Subscription;
  enlaceForm = new FormGroup({
    autor : new FormControl('', [Validators.required]),
    autor_input : new FormControl(' ', [Validators.required]),
    nombre : new FormControl('', [Validators.required]),
    enlace : new FormControl('', [Validators.required])
  });
  enl : Enlace;
  
  constructor(private llamadas: LlamadasService, private _snackBar: MatSnackBar) { 
    this.enl = {
      id : "",
      autor : "",
      nombre : "",
      enlace : "",
      publicar : "1",
      home : "1"
    };
  }

  ngOnInit(): void {
    this.getEnlaces();   
  }

  getEnlaces(){
    this.enlaceSubscription = this.llamadas.getEnlaces().subscribe(
      (response:Enlace[]) => {
        this.enlaces = response;
        this.getAutores();
      }
    )
  }

  getAutores(){
    var autor : string = '';
    var i : number = 0;
    for(i;i<this.enlaces.length;i++){
      if(this.enlaces[i].autor!=autor){
        this.autores.push(this.enlaces[i].autor);
        autor = this.enlaces[i].autor;
      }
    }
  }

  ngOnDestroy(){
    if(!this.enlaceSubscription.closed){
      this.enlaceSubscription.unsubscribe();
    }
    if(this.insertSubscription && !this.insertSubscription.closed){
      this.insertSubscription.unsubscribe();
    }
  }

  onSubmit(){
    this.enl.autor = this.enlaceForm.get('autor').value;
    if(this.enl.autor === 'otro'){
      this.enl.autor = this.enlaceForm.get('autor_input').value;
    }
    this.enl.nombre = this.enlaceForm.get('nombre').value;
    this.enl.enlace = this.enlaceForm.get('enlace').value;
    this.insertSubscription = this.llamadas.insertEnlace(this.enl).subscribe(
      (response:any) => {
        if(response===0){
          this._snackBar.open("El enlace se ha insertado correctamente", "OK", {
            duration: 2000,
          });
          
        }else{
          this._snackBar.open("No se ha podido insertar el enlace", "Error", {
            duration: 2000,
          });
        }
        this.limpiar();
      }
    )
  }

  limpiar(){
    this.enlaceForm.setValue({autor:'',autor_input:'',nombre:'',enlace:''});
  }

  cambiar(){
    if(this.enlaceForm.get('autor').value === 'otro'){
      this.enlaceForm.setValue({autor:this.enlaceForm.get('autor').value,autor_input:'',nombre:this.enlaceForm.get('nombre').value,
      enlace:this.enlaceForm.get('enlace').value});
    }else{
      this.enlaceForm.setValue({autor:this.enlaceForm.get('autor').value,autor_input:' ',nombre:this.enlaceForm.get('nombre').value,
      enlace:this.enlaceForm.get('enlace').value});
    }
  }
}
