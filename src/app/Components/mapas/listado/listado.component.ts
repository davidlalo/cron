import { Component, OnInit, ViewChild } from '@angular/core';
import { Mapa } from '../../../Interfaces/mapa';
import { LlamadasService } from '../../../Services/llamadas.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  mapas : Mapa[];
  mapasSubscription: Subscription;
  constructor(private llamadas: LlamadasService) { 
    this.mapas = [];
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

  getMapas(){
    this.mapasSubscription = this.llamadas.getMapas().subscribe(
      (mapas) => {
        this.dataSource.data = mapas;
        this.dataSource._updateChangeSubscription();
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
