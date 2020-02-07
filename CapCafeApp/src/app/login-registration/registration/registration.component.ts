import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  private formError : boolean  = false;
  private formErrorString : string = "";

  form: FormGroup = new FormGroup({
    employeeId: new FormControl(''),
    emailId: new FormControl(''),
    password: new FormControl(''),
    name: new FormControl(''),
    phoneNumber: new FormControl(''),
    dateOfBirth: new FormControl(''),
    userRole: new FormControl('')
  });

  async submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
      let responseFromServer = await this.registrationService.submitRegistrationForm (this.form.value);
      if (responseFromServer === null) {
        console.log("Error");
        this.formError = true;
        this.formErrorString = "Sorry, we could not register you";
      } else {
        console.log("Success");
        this.formError = false;
        this.formErrorString = "";
        this.route.navigate(['loginRegistration']);
      }
    }
  }

  @Input() error: string | null;

  @Output() submitEM = new EventEmitter();

  constructor(private registrationService : RegistrationService, private route: Router) {

  }
}
