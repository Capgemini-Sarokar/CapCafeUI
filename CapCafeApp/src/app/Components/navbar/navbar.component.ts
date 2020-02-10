import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // Attributes
  @Input()
  private user : User;

  // Control Booleans
  private userLoggedIn : boolean = false;

  constructor() { }

  ngOnInit() {

  }

  userLogOut () {
    
  }
}
