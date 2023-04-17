import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-book-allocation',
  templateUrl: './book-allocation.component.html',
  styleUrls: ['./book-allocation.component.css']
})
export class BookAllocationComponent {
  bAllotForm = new FormGroup({
    bId: new FormControl(""),
    sId: new FormControl(""),
    uId: new FormControl(""),
  });

  bAllotSubmitted(){
    console.log(this.bAllotForm.value);
  }
}
