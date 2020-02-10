import { Component, OnInit, Input } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    @Input()
    private user : User = new User ();

    ngOnInit(): void {
      this.user.employeeId = "dummy Id";
      this.user.name = "dummy name";
      this.user.emailId = "dummy@email.com";
      this.user.phoneNumber = "1234567890";
      this.user.dateOfBirth = "dd/mm/yyyy";
    }

    constructor () {
        
    }
}
