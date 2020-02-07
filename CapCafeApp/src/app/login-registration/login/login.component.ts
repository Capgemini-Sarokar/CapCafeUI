import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from '.././login.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public user : User;

  private formError : boolean = false;
  private formErrorString : String = "";

  form: FormGroup = new FormGroup({
    employeeId: new FormControl(''),
    password: new FormControl(''),
  });

  async submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
      let responseFromServer : any = await this.loginService.submitLoginForm(this.form.value); // this will be json object with user details
      if (responseFromServer === null) {
        console.log("Error");
        this.formError = true;
        this.formErrorString = "Login Error";
      } else {
        this.user = responseFromServer;
        console.log("Success");
        this.formError = false;
        this.formErrorString = "";
        this.route.navigate(['']);
      }
    }
  }

  @Input() error: string | null;

  @Output() submitEM = new EventEmitter();

  constructor(private loginService: LoginService, private route : Router) {

  }

}
