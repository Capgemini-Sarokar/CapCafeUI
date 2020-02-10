import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CafeUserService } from "src/app/Services/cafe-user.service";
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ngOnInit(): void {
    
  }

  public user: User;

  private formError: boolean = false;
  private formErrorString: String = "";

  form: FormGroup = new FormGroup({
    employeeId: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {

  }

  constructor(private userService: CafeUserService, private route: Router) {

  }

  
}
