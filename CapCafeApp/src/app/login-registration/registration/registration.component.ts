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
    employeeId: new FormControl(''),
    emailId: new FormControl(''),
    password: new FormControl(''),
    name: new FormControl(''),
    phoneNumber: new FormControl(''),
    dateOfBirth: new FormControl(''),
    userRole: new FormControl('')
  });

  submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
      let responseFromServer = this.registrationService.submitRegistrationForm (this.form.value);
    }
  }

  @Input() error: string | null;

  @Output() submitEM = new EventEmitter();

  constructor(private registrationService : RegistrationService) {

  }
}
