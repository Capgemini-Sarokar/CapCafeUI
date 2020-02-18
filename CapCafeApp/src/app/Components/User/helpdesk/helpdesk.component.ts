import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-helpdesk',
  templateUrl: './helpdesk.component.html',
  styleUrls: ['./helpdesk.component.css']
})
export class HelpdeskComponent implements OnInit {

  private panelOpenState : boolean = false;

  form: FormGroup = null;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup ({
      orderId : new FormControl(''),
      comments : new FormControl('')
    });
  }

}
