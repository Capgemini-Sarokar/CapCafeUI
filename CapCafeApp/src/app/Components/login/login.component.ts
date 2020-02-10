import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CafeUserService } from "src/app/Services/cafe-user.service";
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output()
  loginEvent = new EventEmitter<User>();

  // Booleans
  private formSubmitted: boolean = false;
  private formError: boolean = false;
  private loginSuccess: boolean = false;

  private formErrorString: String = "";

  ngOnInit(): void {

  }

  private user: User;

  form: FormGroup = new FormGroup({
    employeeId: new FormControl(''),
    password: new FormControl(''),
  });

  async submit() {
    if (this.userService.profile() !== null) {
      this.formError = true;
      this.formErrorString = "A user is already logged in!";
    } else {
      this.formError = false;
      console.log("Login Form Submitted!");
      this.formSubmitted = true;
      this.user = await this.submitForm().catch(error => {
        this.formErrorString = "We were not able to log you in, please try again later";
        console.log(this.formErrorString);
        this.formError = true;
        this.formSubmitted = false;
      });
      if (!this.formError) {
        this.loginEvent.emit(this.user);
        this.userService.saveUser(this.user);
        this.formSubmitted = false;
        this.loginSuccess = true;
        this.form.reset();
        this.navigateToHome();
      }
    }
  }

  submitForm(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.userService.login(this.form.value['employeeId'], this.form.value['password']).subscribe(
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

  constructor(private userService: CafeUserService, private route: Router) {

  }

  navigateToHome() {
    this.route.navigate(['']);
  }
}
