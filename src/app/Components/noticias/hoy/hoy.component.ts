import { Component, OnInit, Input, Inject } from '@angular/core';
import { Noticia } from 'src/app/Interfaces/noticia';
import { LlamadasService } from '../../../Services/llamadas.service';
import { Subscription } from 'rxjs';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  noticia: Noticia;
}

@Component({
  selector: 'app-hoy',
  templateUrl: './hoy.component.html',
  styleUrls: ['./hoy.component.scss']
})
export class HoyComponent implements OnInit {

  @Input() par: any;
  panelOpenState = false;
  noticias : Noticia[];
  noticiasSubscription: Subscription;
  constructor(private llamadas: LlamadasService, public dialog: MatDialog) { 
    this.noticias = [];
  }

  ngOnInit(): void {
    this.getNoticias()
  }

  getNoticias(){
    this.noticiasSubscription = this.llamadas.getNoticias(this.par).subscribe(
      (response:Noticia[]) => {
        this.noticias = response;
      }
    )
  }

  openDialog(element:Noticia): void {
    const dialogRef = this.dialog.open(DialogOverviewDetalleDialog, {
      maxHeight: '600px',
      width: '900px',
      data: {noticia : element}
    });
  }

  ngOnDestroy(){
    if(!this.noticiasSubscription.closed){
      this.noticiasSubscription.unsubscribe();
    }
  }
}

@Component({
  selector: 'dialog-overview-noticia-dialog',
  templateUrl: 'dialog-overview-noticia-dialog.html',
})
export class DialogOverviewDetalleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewDetalleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onClick(): void {
    this.dialogRef.close();
  }
}