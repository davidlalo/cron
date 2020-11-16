import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-que',
  templateUrl: './que.component.html',
  styleUrls: ['./que.component.scss']
})
export class QueComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewSimboloDialog);
  }
}

  @Component({
    selector: 'dialog-overview-simbolo-dialog',
    templateUrl: 'dialog-overview-simbolo-dialog.html',
  })
  export class DialogOverviewSimboloDialog {
  
    constructor(
      public dialogRef: MatDialogRef<DialogOverviewSimboloDialog>) {}
  
    onClick(): void {
      this.dialogRef.close();
    }
  }


