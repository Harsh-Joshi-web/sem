import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

export interface PeriodicElement {
  name: string;
  author: string;
  price: number;
  course: string;
  action: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Hydrogen', author: 'Hydra', price: 100, course: 'BTech', action:1},
  {name: 'Hydrogen', author: 'Hydrogen', price: 250, course: 'BTech', action:1},
];

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  
  // For Form
  bookForm = new FormGroup({
    bName: new FormControl(""),
    bAuthor: new FormControl(""),
    price: new FormControl(""),
    course: new FormControl("")
  });

  bookSubmitted(){
    console.log(this.bookForm.value);
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

  displayedColumns: string[] = ['name', 'author', 'price', 'course', 'action'];
  dataSource = ELEMENT_DATA;
}
