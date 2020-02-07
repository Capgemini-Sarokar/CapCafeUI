import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from '.././login.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup = new FormGroup({
    employeeId: new FormControl(''),
    password: new FormControl(''),
  });

  async submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
      let responseFromServer : any = await this.loginService.submitLoginForm(this.form.value); // this will be json object with user details
      console.log(responseFromServer);
      if (responseFromServer instanceof HttpErrorResponse) {
        // error occured during loggin in
        console.log("error occured during loggin in");
      } else {
        localStorage.setItem("userDetails", responseFromServer);
      }
    }
  }

  @Input() error: string | null;

  @Output() submitEM = new EventEmitter();

  constructor(private loginService: LoginService) {

  }

}
