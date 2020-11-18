import { Component, OnInit, ViewChild } from '@angular/core';
import { Noticia } from '../../../Interfaces/noticia';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LlamadasService } from '../../../Services/llamadas.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { Subscription } from 'rxjs';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AuthService } from '../../../auth/auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-admin-noticias',
  templateUrl: './admin-noticias.component.html',
  styleUrls: ['./admin-noticias.component.scss']
})
export class AdminNoticiasComponent implements OnInit {

  seccion : string;
  id :string;
  noticiasSubscription: Subscription;
  noticiaSubscription: Subscription;
  insertSubscription: Subscription;
  deleteSubscription: Subscription;
  updateSubscription: Subscription;
  noticiaForm = new FormGroup({
    noticia : new FormControl('', [Validators.required]),
    entradilla : new FormControl('', [Validators.required]),
    cuerpo : new FormControl('')
  });
  not : Noticia;

  constructor(private llamadas: LlamadasService, public dialog: MatDialog, public authService: AuthService, private _snackBar: MatSnackBar) {
    this.seccion = "listado";
    this.not = {
      id : "",
      autor: "",
      noticia: "",
      entradilla : "",
      cuerpo: "",
      fecha : ""
    };
   }

  ngOnInit(): void {
    this.getMisNoticias();
  }

  displayedColumns: string[] = ['foto','noticia', 'fecha', 'id', 'acciones'];
  dataSource = new MatTableDataSource<Noticia>();
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getMisNoticias(){
    this.noticiasSubscription = this.llamadas.getMisNoticias(this.authService.userLoggedIn.nombre).subscribe(
      (response:Noticia[]) => {
        this.dataSource.data = response;
        this.dataSource._updateChangeSubscription();
        this.seccion = "listado";
        this.noticiaForm.setValue({noticia:'',entradilla:'',cuerpo:''});
        this.id = "";
      }
    )
  }

  ngOnDestroy(){
    if(!this.noticiasSubscription.closed){
      this.noticiasSubscription.unsubscribe();
    }
    if(!this.noticiaSubscription.closed){
      this.noticiaSubscription.unsubscribe();
    }
    if(!this.insertSubscription.closed){
      this.insertSubscription.unsubscribe();
    }
    if(!this.deleteSubscription.closed){
      this.deleteSubscription.unsubscribe();
    }
    if(!this.updateSubscription.closed){
      this.updateSubscription.unsubscribe();
    }
  }

  cambio(sec:string){
    this.seccion = sec;
  }

  accion(ac:string,elemento:Noticia){
    this.id = elemento.id;
    if(ac==="1"){
      this.noticiaSubscription = this.llamadas.getNoticia(this.id).subscribe(
        (response:Noticia[]) => {
          this.noticiaForm.setValue({noticia:response[0].noticia,entradilla:response[0].entradilla,cuerpo:response[0].cuerpo});
          this.seccion = "nueva";
        }
      )     
    }else{
      this.deleteSubscription = this.llamadas.deleteNoticia(this.id).subscribe(
        (response) => {
          if(response===0){
            this._snackBar.open("La noticia se ha borrado correctamente", "OK", {
              duration: 2000,
            });
            this.getMisNoticias();
          }else{
            this._snackBar.open("No se ha podido borrar la noticia", "Error", {
              duration: 2000,
            });
          }
        }
      )
      this.id = "";
    }
    
  }

  onSubmit() {
    this.not.noticia=this.noticiaForm.get('noticia').value;
    this.not.entradilla=this.noticiaForm.get('entradilla').value;
    this.not.cuerpo=this.noticiaForm.get('cuerpo').value;
    this.not.autor=this.authService.userLoggedIn.nombre;
    if(this.id===""){ 
      this.insertSubscription = this.llamadas.insertNoticia(this.not).subscribe(
        (response) => {
          if(response===0){
            this._snackBar.open("La noticia se ha insertado correctamente", "OK", {
              duration: 2000,
            });
            
          }else{
            this._snackBar.open("No se ha podido insertar la noticia", "Error", {
              duration: 2000,
            });
          }
          this.getMisNoticias();
        }
      )
    }else{
      this.not.id=this.id;
      this.updateSubscription = this.llamadas.updateNoticia(this.not).subscribe(
        (response) => {
          if(response===0){
            this._snackBar.open("La noticia se ha atualizado correctamente", "OK", {
              duration: 2000,
            });
            this.getMisNoticias();
          }else{
            this._snackBar.open("No se ha podido actualizar la noticia", "Error", {
              duration: 2000,
            });
          }
        }
      )
      this.id = "";
    }
  }
}
