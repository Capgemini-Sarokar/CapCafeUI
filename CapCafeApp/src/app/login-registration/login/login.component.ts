import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from '.././login.service';

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

  submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
      let responseFromServer = this.loginService.submitLoginForm (this.form.value); // this will be json object with user details
    }
  }

  @Input() error: string | null;

  @Output() submitEM = new EventEmitter();

  constructor(private loginService: LoginService) {

  }

}
