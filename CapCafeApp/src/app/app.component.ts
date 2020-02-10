import { Component, OnInit } from '@angular/core';
import { User } from './models/user';
import { UserDataServiceService } from './user-data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private user : User = null;

  subscription: any;
  ngOnInit(): void {
    this.userLoggedIn = false;
    // this.user = new User ();
    // this.user.name = "Dummy";
    this.subscription = this.userDataService.userData$.subscribe(
      item => {
        if (this.user === null) {
          this.user = item;
          this.userLoggedIn = true;
        }
      }
    );
  }

  title : string = 'CapCafeApp';
  appTitle : string = 'CapCafe';

  // Html DOM manipulation variables
  userRoleType : string = 'admin'; // used in role mapping for admin and customer
  userLoggedIn : boolean = false; // used to set login and logout status and change menus

  constructor (private userDataService : UserDataServiceService, private route:Router) {

  }

  logOut() {
    this.userLoggedIn = false;
    this.user = null; 
    this.route.navigate(['']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
