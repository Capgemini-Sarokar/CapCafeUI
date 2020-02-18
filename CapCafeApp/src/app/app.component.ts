import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { CafeUserService } from './Services/cafe-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {

  title : string = 'CapCafeApp';
  appTitle : string = 'CapCafe';

  // Html DOM manipulation variables
  userRoleType : string = 'admin'; // used in role mapping for admin and customer
  userLoggedIn : boolean = false; // used to set login and logout status and change menus

  constructor (private userService: CafeUserService, private route:Router) {

  }  

  ngOnInit(): void {
    console.log(localStorage.getItem("currentUser") === null);
    if(localStorage.getItem("currentUser") !== null) {
      this.userService.saveUser(JSON.parse(localStorage.getItem("currentUser")));
    }
  }

 ngDoCheck(): void {
    if (this.userService.profile() !== null) {
      this.userLoggedIn = true;
    }
  }
}
