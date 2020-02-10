import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { User } from './models/user.model';
import { Router } from '@angular/router';
import { CafeUserService } from './Services/cafe-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {

  private user : User = null;

  ngOnInit(): void {
    console.log(this.user);
    if (this.user === null)
      this.route.navigate(['login']);
  }

 ngDoCheck(): void {
    if (this.userService.profile() !== null) {
      this.user = this.userService.profile();
      this.userLoggedIn = true;
    }
  }

  title : string = 'CapCafeApp';
  appTitle : string = 'CapCafe';

  // Html DOM manipulation variables
  userRoleType : string = 'admin'; // used in role mapping for admin and customer
  userLoggedIn : boolean = false; // used to set login and logout status and change menus

  constructor (private userService: CafeUserService, private route:Router) {

  }  
}
