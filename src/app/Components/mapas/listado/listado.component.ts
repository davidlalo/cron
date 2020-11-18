import { Component, OnInit, ViewChild, Inject, Output, EventEmitter } from '@angular/core';
import { Mapa } from '../../../Interfaces/mapa';
import { LlamadasService } from '../../../Services/llamadas.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { Subscription } from 'rxjs';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  id: any;
}

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  @Output() valor : EventEmitter<string> = new EventEmitter();
  @Output() id : EventEmitter<string> = new EventEmitter();
  //mapas : Mapa[];
  mapasSubscription: Subscription;
  constructor(private llamadas: LlamadasService, public dialog: MatDialog) { 
    //this.mapas = [];
  }

  ngOnInit(): void {
    this.getMapas();
  }

  displayedColumns: string[] = ['denominacion', 'autores', 'ent_patroc', 'num_RPI',
  'num_DL', 'num_RF', 'escala', 'tamano', 'idmapa'];
  dataSource = new MatTableDataSource<Mapa>();
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  val(value:string,element:Mapa){
    this.valor.emit(value);
    this.id.emit(element.idmapa);
  }
  getMapas(){
    this.mapasSubscription = this.llamadas.getMapas().subscribe(
      (response:Mapa[]) => {
        this.dataSource.data = response;
        this.dataSource._updateChangeSubscription();
      }
    )
  }

  ngOnDestroy(){
    if(!this.mapasSubscription.closed){
      this.mapasSubscription.unsubscribe();
    }
  }

  openDialog(element:Mapa): void {
    const dialogRef = this.dialog.open(DialogOverviewDetalleDialog, {
      data: {id : element.idmapa}
    });
  }
}


@Component({
  selector: 'dialog-overview-detalle-dialog',
  templateUrl: 'dialog-overview-detalle-dialog.html',
})
export class DialogOverviewDetalleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewDetalleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onClick(): void {
    this.dialogRef.close();
  }

}