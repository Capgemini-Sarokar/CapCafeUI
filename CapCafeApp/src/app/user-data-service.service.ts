import { Injectable } from '@angular/core';
import { User } from './models/user';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataServiceService {

  private userData = new Subject<User>();

  userData$ = this.userData.asObservable();

  constructor() { }

  putUser (user : User) {
    this.userData.next(user);
  }
}
