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

  private formError: boolean = false;
  private formErrorString: string = "";

  private formSubmitted : boolean = false;
  private registrationSuccess : boolean = false;

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

  async submit() {
    this.formError = false;
    this.registrationSuccess = false;
    console.log("Registration Form Submitted!");
    this.formSubmitted = true;
    let x = await this.submitForm().catch(error => {
      this.formErrorString = "We were not able to register you, please try again later";
      console.log(this.formErrorString);
      this.formError = true;
    });
    this.registrationSuccess = true;
    this.form.reset();
    this.formSubmitted = false;
    this.formErrorString = "Registration Successfull!";
    console.log(x);
  }

  submitForm() : Promise<any> {
    return new Promise((resolve, reject) => {
      this.userService.signUp(this.form.value).subscribe(
        item => {
          // item will be an instance of User model
          console.log(item);
          resolve(item);
        },
        error => {
          // error will be an instance of HttpErrorResponse
          console.log(error);
          reject(error);
        }
      );
    });
  }

  redirectToLogin() : void {
    this.route.navigate(['login']);
  }
}
