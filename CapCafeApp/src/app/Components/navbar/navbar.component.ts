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
  }

  userLogOut () {
    console.log("LogOut Called!");
    this.userLoggedIn = false;
    sessionStorage.clear();
    this.user = null; 
    this.userService.clearUser();
    this.ngOnInit();
    this.route.navigate(['']);
  }
}
