import { Component, OnInit } from '@angular/core';
import { LoginService } from './login-registration/login.service';
import { User } from './models/user';
import { LoginComponent } from './login-registration/login/login.component';
import { UserDataServiceService } from './user-data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private user : User = null;

  ngOnChanges () {

  }

  subscription: any;
  ngOnInit(): void {
    this.userLoggedIn = false;
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

  constructor (private userDataService : UserDataServiceService) {

  }

  logOut() {
    this.userLoggedIn = false;
    this.user = null; 
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
