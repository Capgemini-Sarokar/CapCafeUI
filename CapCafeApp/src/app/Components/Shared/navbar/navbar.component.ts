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

  private userLoggedIn: boolean;

  constructor(private userService : CafeUserService, private route : Router) { 

  }

  ngOnInit() {
    if (this.userService.isUserLoggedIn()){
      this.userLoggedIn = true;
    } else {
      this.userLoggedIn = false;
    }
  }

  ngDoCheck(): void {
    if (this.userService.isUserLoggedIn()){
      this.userLoggedIn = true;
    }
  }

  userLogOut () {
    this.userService.logout();
    this.userLoggedIn = false;
    this.route.navigate(['login'])
  }
}
