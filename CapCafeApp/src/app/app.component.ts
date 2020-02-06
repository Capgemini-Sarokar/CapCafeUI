import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-test-bed';
  appTitle = 'CapCafe';

  // Html DOM manipulation variables
  userRoleType = 'admin'; // used in role mapping for admin and customer
}
