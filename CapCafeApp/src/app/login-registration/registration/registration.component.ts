import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  form: FormGroup = new FormGroup({
    employeeid: new FormControl(''),
    emailid: new FormControl(''),
    name: new FormControl(''),
    phonenumber: new FormControl(''),
    dateofbirth: new FormControl('')
  });

  submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
    }
  }

  @Input() error: string | null;

  @Output() submitEM = new EventEmitter();

  constructor(private registrationService : RegistrationService) {

  }
}
