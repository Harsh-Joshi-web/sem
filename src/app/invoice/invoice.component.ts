import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})

export class InvoiceComponent {
  panelOpenState = false;
  panelOpenState2 = true;
  amt = 500;
  gst = 5;
  price = 505;

  // For table
  displayedColumns: string[] = ['id', 'name', 'email', 'action'];
  dataSource = ELEMENT_DATA;

  // For Form
  invoiceForm = new FormGroup({
    uniId: new FormControl(""),
    term: new FormControl(""),
  });

  invoiceSubmitted(){
    console.log(this.invoiceForm.value);
  }

  // For Modal
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
}
