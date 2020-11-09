import { Component, OnInit, ViewChild } from '@angular/core';
import { Mapa } from '../../../Interfaces/mapa';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';

const ELEMENT_DATA: Mapa[] = [
  {denominacion : 'LA ESTACADA',autores : 'Pepe',ent_patroc : 'CRON',num_RPI : 'LO-10-32',
	num_DL : 'LR-432',num_RF : 'LO-365',escala : '1/10.000',tamano : '29,8x32,1',idmapa : '1',coordenadas_GPS : '',
  ubicacion : ''},
  {denominacion : 'LA ESTACADA',autores : 'Pepe',ent_patroc : 'CRON',num_RPI : 'LO-10-32',
	num_DL : 'LR-432',num_RF : 'LO-365',escala : '1/10.000',tamano : '29,8x32,1',idmapa : '1',coordenadas_GPS : '',
  ubicacion : ''},
  {denominacion : 'LA ESTACADA',autores : 'Pepe',ent_patroc : 'CRON',num_RPI : 'LO-10-32',
	num_DL : 'LR-432',num_RF : 'LO-365',escala : '1/10.000',tamano : '29,8x32,1',idmapa : '1',coordenadas_GPS : '',
  ubicacion : ''},
  {denominacion : 'LA ESTACADA',autores : 'Pepe',ent_patroc : 'CRON',num_RPI : 'LO-10-32',
	num_DL : 'LR-432',num_RF : 'LO-365',escala : '1/10.000',tamano : '29,8x32,1',idmapa : '1',coordenadas_GPS : '',
  ubicacion : ''},
  {denominacion : 'LA ESTACADA',autores : 'Pepe',ent_patroc : 'CRON',num_RPI : 'LO-10-32',
	num_DL : 'LR-432',num_RF : 'LO-365',escala : '1/10.000',tamano : '29,8x32,1',idmapa : '1',coordenadas_GPS : '',
  ubicacion : ''},
  {denominacion : 'LA ESTACADA',autores : 'Pepe',ent_patroc : 'CRON',num_RPI : 'LO-10-32',
	num_DL : 'LR-432',num_RF : 'LO-365',escala : '1/10.000',tamano : '29,8x32,1',idmapa : '1',coordenadas_GPS : '',
  ubicacion : ''},
  {denominacion : 'LA ESTACADA',autores : 'Pepe',ent_patroc : 'CRON',num_RPI : 'LO-10-32',
	num_DL : 'LR-432',num_RF : 'LO-365',escala : '1/10.000',tamano : '29,8x32,1',idmapa : '1',coordenadas_GPS : '',
  ubicacion : ''},
  {denominacion : 'LA ESTACADA',autores : 'Pepe',ent_patroc : 'CRON',num_RPI : 'LO-10-32',
	num_DL : 'LR-432',num_RF : 'LO-365',escala : '1/10.000',tamano : '29,8x32,1',idmapa : '1',coordenadas_GPS : '',
  ubicacion : ''},
  {denominacion : 'LA ESTACADA',autores : 'Pepe',ent_patroc : 'CRON',num_RPI : 'LO-10-32',
	num_DL : 'LR-432',num_RF : 'LO-365',escala : '1/10.000',tamano : '29,8x32,1',idmapa : '1',coordenadas_GPS : '',
  ubicacion : ''},
  {denominacion : 'LA ESTACADA',autores : 'Pepe',ent_patroc : 'CRON',num_RPI : 'LO-10-32',
	num_DL : 'LR-432',num_RF : 'LO-365',escala : '1/10.000',tamano : '29,8x32,1',idmapa : '1',coordenadas_GPS : '',
  ubicacion : ''}
];

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['denominacion', 'autores', 'ent_patroc', 'num_RPI',
  'num_DL', 'num_RF', 'escala', 'tamano', 'idmapa'];
  dataSource = new MatTableDataSource<Mapa>(ELEMENT_DATA);
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
