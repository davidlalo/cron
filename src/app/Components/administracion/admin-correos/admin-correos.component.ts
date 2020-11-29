import { Component, OnInit, ViewChild } from '@angular/core';
import { LlamadasService } from '../../../Services/llamadas.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { Subscription } from 'rxjs';
import { Miembro } from 'src/app/Interfaces/miembro';

@Component({
  selector: 'app-admin-correos',
  templateUrl: './admin-correos.component.html',
  styleUrls: ['./admin-correos.component.scss']
})
export class AdminCorreosComponent implements OnInit {

  miembrosSubscription: Subscription;

  constructor(private llamadas: LlamadasService) { }

  ngOnInit(): void {
    this.getMiembros();
  }

  displayedColumns: string[] = ['nombre','nombre_completo', 'email', 'categoria', 'sportident'];
  dataSource = new MatTableDataSource<Miembro>();
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getMiembros(){
    this.miembrosSubscription = this.llamadas.getMiembros().subscribe(
      (response:Miembro[]) => {
        this.dataSource.data = response;
        this.dataSource._updateChangeSubscription();
      }
    )
  }

  ngOnDestroy(){
    if(!this.miembrosSubscription.closed){
      this.miembrosSubscription.unsubscribe();
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
