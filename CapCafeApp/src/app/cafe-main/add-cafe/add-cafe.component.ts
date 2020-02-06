import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Input, Output, EventEmitter } from '@angular/core';
import { CafeService } from './add-cafe.service';



@Component({
  selector: 'app-add-cafe',
  templateUrl: './add-cafe.component.html',
  styleUrls: ['./add-cafe.component.css']
})
export class AddCafeComponent {
  form: FormGroup = new FormGroup({
    cafeId: new FormControl(''),
    cafeName: new FormControl(''),
    cafeOwner: new FormControl(''),
    location: new FormControl(''),
  });
 

  submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
      let responseFromServer = this.cafeService.submitCafeForm (this.form.value);
    }
  }

  @Input() error: string | null;

  @Output() submitEM = new EventEmitter();

  constructor(private cafeService : CafeService) { }

  
  }


