import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

declare var window:any;

export interface PeriodicElement {
  id: number;
  name: string;
  email: string;
  action: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Hydrogen', email:'abc@gmail.com', action: 1},
  {id: 2, name: 'Helium', email: 'abc@gmail.com', action: 2},
  {id: 3, name: 'Lithium', email: 'abc@gmail.com', action: 1}
];

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.css']
})

export class UniversityComponent{
  
  panelOpenState1 = true;

  // For Forms
  universityForm = new FormGroup({
    uniName: new FormControl(""),
    address: new FormControl(""),
  });

  uniSubmitted(){
    console.log(this.universityForm.value);
  }

  // For modal
  openModel() {
    const modelDiv = document.getElementById('myModal');
    if(modelDiv!= null) {
      modelDiv.style.display = 'block';
    } 
  }

  CloseModel() {
    const modelDiv = document.getElementById('myModal');
    if(modelDiv!= null) {
      modelDiv.style.display = 'none';
    } 
  }

  // For table
  displayedColumns: string[] = ['id', 'name', 'email', 'action'];
  dataSource = ELEMENT_DATA;

  // constructor(private _dialog: MatDialog) {}


}


