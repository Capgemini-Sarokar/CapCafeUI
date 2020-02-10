import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CafeUserService } from 'src/app/Services/cafe-user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

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
  
  constructor(private userService: CafeUserService, private route: Router) { }

  ngOnInit() {
    
  }

  submit () {
    console.log("Registration Form Submitted!");
    this.userService.signUp(this.form)
    .subscribe(
      item => {
        console.log(item);
      }
    );
  }

}
