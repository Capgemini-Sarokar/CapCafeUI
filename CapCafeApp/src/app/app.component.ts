import { Component, OnInit } from '@angular/core';
import { LoginService } from './login-registration/login.service';
import { User } from './models/user';
import { DoCheck, KeyValueDiffers, KeyValueDiffer } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private user : User;

  ngOnInit(): void {
    if (this.user === null) {
      this.userLoggedIn = false;
    } else {
      this.userLoggedIn = true;
      this.user = this.loginService.user;
    }
  }

  title : string = 'CapCafeApp';
  appTitle : string = 'CapCafe';

  // Html DOM manipulation variables
  userRoleType : string = 'admin'; // used in role mapping for admin and customer
  userLoggedIn : boolean = false; // used to set login and logout status and change menus

  constructor (private loginService : LoginService, private differs: KeyValueDiffers) {
    this.differ = this.differs.find({}).create();
  }

  differ: KeyValueDiffer<string, any>;

  ngDoCheck() {
    const change = this.differ.diff(this);
    if (change) {
      change.forEachChangedItem(item => {
        console.log('item changed', item);
      });
    }
  }

  logOut() {
    this.userLoggedIn = false;
    this.user = null; 
  }
}
