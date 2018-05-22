import { Component,HostListener, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {FormControl, Validators} from '@angular/forms';
import {DialogEditContact} from './contacts.edit.component';

@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
  public col: any = 4;
  cards:any = [
    { title: 'Mitutoyo', type: "Provedor", telefono: "(01-55) 5312-5612",dir:"Industria Elektrica 15, Parque Industrial, 53370 Naucalpan de Juárez, Méx.",email:"ventas@mitutoyo.com" },
    { title: 'Daniel Espinosa', type: "Cliente", telefono: "5527241639",dir:"Alamo 10, Ex hacienda del Pedregal, Atizapan de Zaragoza, Mexico.", email:"danielespinosa.bin@gmail.com"},
    { title: 'Card 3', cols: 1, rows: 1 },
    { title: 'Card 4', cols: 1, rows: 1 }
  ];

  constructor(public dialog: MatDialog) {}



    edit(card){
    //  alert(JSON.stringify(card));

      let dialogRef = this.dialog.open(DialogEditContact, {
         width: '600px',
         data:{title: card.title,type:card.type,telefono:card.telefono,dir:card.dir,email:card.email}
       });

     dialogRef.afterClosed().subscribe(result => {
       card.title = result.title
       card.type = result.type
       card.telefono = result.telefono
       card.dir =result.dir
       card.email =result.email
     });
    }

    @HostListener('window:resize', ['$event'])
    onResize(event) {

      console.log(this.col)



        if (event.target.innerWidth < 970) {
          this.col = 3;
        }

        if (event.target.innerWidth > 970) {
          this.col = 4;
        }

        if (event.target.innerWidth < 750) {
          this.col = 1;
        }
    }

}
