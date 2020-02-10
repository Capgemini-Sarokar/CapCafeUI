import { Component, OnInit, Input } from '@angular/core';
import { User } from '../models/user';
import { UserDataServiceService } from '../user-data-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    private user : User = null;

    subscription: any;
    ngOnInit(): void {
      this.subscription = this.userDataService.userData$.subscribe(
        item => {
          if (this.user === null) {
            this.user = item;
          }
        }
      );
    }

    constructor (private userDataService: UserDataServiceService) {
        
    }
}
