import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { CafeUserService } from 'src/app/Services/cafe-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, DoCheck {

  private user : User;

  // Control Booleans
  private userLoggedIn : boolean = false;

  constructor(private userService : CafeUserService, private route : Router) { }

  ngOnInit() {
    if (this.userService.profile() !== null) {
      this.user = this.userService.profile();
      this.userLoggedIn = true;
    } else if (localStorage.getItem("currentUser") !== null) {
      this.user = JSON.parse(localStorage.getItem("currentUser"));
      this.userService.saveUser(this.user);
      this.userLoggedIn = true;
    } else {
      this.userLoggedIn = false;
    }
  }

  ngDoCheck(): void {
    if (this.userService.profile() !== null) {
      this.user = this.userService.profile();
      this.userLoggedIn = true;
    }
    if (this.user === null) {
      this.userLoggedIn = false;
    }
    if (localStorage.getItem("currentUser") === null) {
      this.userLoggedIn = false;
    } else {
      this.userLoggedIn = true;
      this.user = JSON.parse(localStorage.getItem("currentUser"));
      this.userService.saveUser(this.user);
    }
  }

  userLogOut () {
    console.log("LogOut Called!");
    this.userLoggedIn = false;
    localStorage.removeItem("currentUser");
    sessionStorage.clear();
    this.user = null; 
    this.userService.clearUser();
    this.ngOnInit();
    this.route.navigate(['']);
  }
}
