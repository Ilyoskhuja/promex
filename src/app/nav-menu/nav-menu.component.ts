import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogOverviewExampleDialog } from '../auth/authDialog';
import { MainService } from '../main.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  password: string;
  name: string;
  signed: boolean = false;
  constructor(public dialog: MatDialog,public main:MainService) { 
    this.password = '';
    this.name = '';
    console.log("constructor:", localStorage.getItem("token"));
    
    if (localStorage.getItem("token") == undefined)
    { this.signed = false; this.openDialog();}
    else
      this.signed = true;
  }
 
  ngOnInit(): void {
    console.log("this.main.authChange:", this.main.authChange);
    
    this.main.authChange.subscribe(value => {
      console.log("value:",value);
      
      console.log("token:",localStorage.getItem("token"));
      
      if (localStorage.getItem("token") == undefined)
      {
        this.signed = false;
        this.openDialog();
      }
      else
        this.signed = true;
    })
  }
  logOut() {
    localStorage.clear();
    if (localStorage.getItem("token") == undefined)
    {
      this.signed = false;
      this.openDialog();
    }
    else
      this.signed = true;
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: { name: this.name, password: this.password }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.password = result;
    });
  }

}
