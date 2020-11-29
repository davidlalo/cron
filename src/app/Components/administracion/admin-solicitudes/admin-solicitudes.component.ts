import { Component, OnInit, ViewChild } from '@angular/core';
import { LlamadasService } from '../../../Services/llamadas.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { Subscription } from 'rxjs';
import { AuthService } from '../../../auth/auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Solicitud } from 'src/app/Interfaces/solicitud';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-solicitudes',
  templateUrl: './admin-solicitudes.component.html',
  styleUrls: ['./admin-solicitudes.component.scss']
})
export class AdminSolicitudesComponent implements OnInit {

  seccion : string;
  solicitudesSubscription: Subscription;
  updateSubscription: Subscription;
  solicitud : Solicitud;
  filtroForm = new FormGroup({
    filtro : new FormControl(''),
    estado : new FormControl('')
  });

  constructor(private llamadas: LlamadasService, public authService: AuthService, private _snackBar: MatSnackBar) {
    this.seccion = "gestion";
   }

  ngOnInit(): void {
    this.getSolicitudes();
  }
  estadoForm = new FormGroup({
    estado : new FormControl('', [Validators.required])
  });
  displayedColumns: string[] = ['solicitante','responsable', 'actividad', 'mapa', 'concedido', 'acciones'];
  dataSource = new MatTableDataSource<Solicitud>();
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getSolicitudes(){
    this.solicitudesSubscription = this.llamadas.getSolicitudes().subscribe(
      (response:Solicitud[]) => {
        this.dataSource.data = response;
        this.dataSource._updateChangeSubscription();
      }
    )
  }

  updateEstado(){
    this.updateSubscription = this.llamadas.updateSolicitud(this.solicitud.id,this.estadoForm.get('estado').value).subscribe(
      (response:any) => {
        if(response===0){
          this._snackBar.open("La solicitud se ha actualizado correctamente", "OK", {
            duration: 2000,
          });
          this.solicitud.concedido=this.setNombre(this.estadoForm.get('estado').value);
        }else{
          this._snackBar.open("No se ha podido actualizar la solicitud", "Error", {
            duration: 2000,
          });
        }
      }
    )
  }

  ngOnDestroy(){
    if(!this.solicitudesSubscription.closed){
      this.solicitudesSubscription.unsubscribe();
    }
    if(this.updateSubscription && !this.updateSubscription.closed){
      this.updateSubscription.unsubscribe();
    }
  }

  volver(){
    this.seccion = 'gestion';
    this.dataSource.paginator.lastPage;
  }

  ver(elemento:Solicitud){
    this.seccion = 'detalle';
    this.solicitud = elemento;
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.filtroForm.get('estado').setValue('');
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  applyFilter2(event: string) {
    this.dataSource.filter = event;
    this.filtroForm.get('filtro').setValue('');
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  setNombre(id:string){
    if(id=='0'){
        return 'Solicitado';
    }else if(id=='1'){
        return 'En proceso';
    }else if(id=='2'){
        return 'Concedido';
    }else{
        return 'Denegado';
    }
}

}
