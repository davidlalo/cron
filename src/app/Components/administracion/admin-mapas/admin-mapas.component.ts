import { Component, OnInit, ViewChild } from '@angular/core';
import { Mapa } from '../../../Interfaces/mapa';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LlamadasService } from '../../../Services/llamadas.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { Subscription } from 'rxjs';
import { AuthService } from '../../../auth/auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import { DialogoConfirmacionComponent } from "../../dialogo-confirmacion/dialogo-confirmacion.component";

@Component({
  selector: 'app-admin-mapas',
  templateUrl: './admin-mapas.component.html',
  styleUrls: ['./admin-mapas.component.scss']
})
export class AdminMapasComponent implements OnInit {

  seccion : string;
  id :string;
  mapasSubscription: Subscription;
  mapaSubscription: Subscription;
  insertSubscription: Subscription;
  deleteSubscription: Subscription;
  updateSubscription: Subscription;
  mapaForm = new FormGroup({
    denominacion : new FormControl('', [Validators.required]),
    autores : new FormControl('', [Validators.required]),
    entidad : new FormControl('', [Validators.required]),
    registro_PI : new FormControl('', [Validators.required]),
    deposito : new FormControl('', [Validators.required]),
    registro_FEDO : new FormControl('', [Validators.required]),
    escala : new FormControl('', [Validators.required]),
    tamano : new FormControl('', [Validators.required]),
    ubicacion : new FormControl('', [Validators.required]),
    coordenadas : new FormControl('', [Validators.required])
  });
  map : Mapa;

  constructor(private llamadas: LlamadasService, public dialogo: MatDialog, public authService: AuthService, private _snackBar: MatSnackBar) {
    this.seccion = "listado";
    this.map = {
      idmapa : "",
      denominacion : "",
      autores : "",
      ent_patroc : "",
      num_RPI : "",
      num_DL : "",
      num_RF : "",
      escala : "",
      tamano : "",
      coordenadas_GPS : "",
      ubicacion : "",
    };
   }

  ngOnInit(): void {
    this.getMapas();
  }

  displayedColumns: string[] = ['denominacion','autores', 'ent_patroc', 'ubicacion', 'acciones'];
  dataSource = new MatTableDataSource<Mapa>();
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getMapas(){
    this.mapasSubscription = this.llamadas.getMapas().subscribe(
      (response:Mapa[]) => {
        this.dataSource.data = response;
        this.dataSource._updateChangeSubscription();
        this.seccion = "listado";
        this.mapaForm.setValue({denominacion:'',autores:'',entidad:'',registro_PI:'',deposito:'',
        registro_FEDO:'',escala:'',tamano:'',ubicacion:'',coordenadas:''});
        this.id = "";
      }
    )
  }

  ngOnDestroy(){
    if(!this.mapasSubscription.closed){
      this.mapasSubscription.unsubscribe();
    }
    if(this.mapaSubscription!=undefined && !this.mapaSubscription.closed){
      this.mapaSubscription.unsubscribe();
    }
    if(this.insertSubscription!=undefined && !this.insertSubscription.closed){
      this.insertSubscription.unsubscribe();
    }
    if(this.deleteSubscription!=undefined && !this.deleteSubscription.closed){
      this.deleteSubscription.unsubscribe();
    }
    if(this.updateSubscription!=undefined && !this.updateSubscription.closed){
      this.updateSubscription.unsubscribe();
    }
  }

  cambio(sec:string){
    this.seccion = sec;
  }

  accion(ac:string,elemento:Mapa){
    this.id = elemento.idmapa;
    if(ac==="1"){
      this.mapaSubscription = this.llamadas.getMapa(this.id).subscribe(
        (response:Mapa) => {
          this.mapaForm.setValue({denominacion:response.denominacion,autores:response.autores,entidad:response.ent_patroc,
            registro_PI:response.num_RPI,deposito:response.num_DL,registro_FEDO:response.num_RF,escala:response.escala,
            tamano:response.tamano,ubicacion:response.ubicacion,coordenadas:response.coordenadas_GPS});
          this.seccion = "nueva";
        }
      )     
    }else{
      this.mostrarDialogo();
    }
    
  }

  onSubmit() {
    this.map.denominacion=this.mapaForm.get('denominacion').value;
    this.map.autores=this.mapaForm.get('autores').value;
    this.map.ent_patroc=this.mapaForm.get('entidad').value;
    this.map.num_RPI=this.mapaForm.get('registro_PI').value;
    this.map.num_DL=this.mapaForm.get('deposito').value;
    this.map.num_RF=this.mapaForm.get('registro_FEDO').value;
    this.map.escala=this.mapaForm.get('escala').value;
    this.map.tamano=this.mapaForm.get('tamano').value;
    this.map.coordenadas_GPS=this.mapaForm.get('coordenadas').value;
    this.map.ubicacion=this.mapaForm.get('ubicacion').value;
    if(this.id===""){ 
      this.insertSubscription = this.llamadas.insertMapa(this.map).subscribe(
        (response:any) => {
          if(response===0){
            this._snackBar.open("El mapa se ha insertado correctamente", "OK", {
              duration: 2000,
            });
            
          }else{
            this._snackBar.open("No se ha podido insertar el mapa", "Error", {
              duration: 2000,
            });
          }
          this.getMapas();
        }
      )
    }else{
      this.map.idmapa=this.id;
      this.updateSubscription = this.llamadas.updateMapa(this.map).subscribe(
        (response:any) => {
          if(response===0){
            this._snackBar.open("El mapa se ha atualizado correctamente", "OK", {
              duration: 2000,
            });
            this.getMapas();
          }else{
            this._snackBar.open("No se ha podido actualizar el mapa", "Error", {
              duration: 2000,
            });
          }
        }
      )
      this.id = "";
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  mostrarDialogo(): void {
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: `¿Está seguro de borrar el mapa?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (confirmado) {
          this.deleteSubscription = this.llamadas.deleteMapa(this.id).subscribe(
            (response:any) => {
              if(response===0){
                this._snackBar.open("El mapa se ha borrado correctamente", "OK", {
                  duration: 2000,
                });
                this.getMapas();
              }else{
                this._snackBar.open("No se ha podido borrar el mapa", "Error", {
                  duration: 2000,
                });
              }
            }
          )
          this.id = "";
        }
      });     
  }
}