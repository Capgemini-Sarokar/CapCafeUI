import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CafeUserService {

  private loggedInUser : User = null;

  constructor(private http: HttpClient) { 

  }

  role () : string{
    return this.loggedInUser !== null ? this.loggedInUser.userRole : '';
  }

  saveUser (user: User) : void {
    console.log(user);
    this.loggedInUser = user;
    sessionStorage.setItem("currentUser", JSON.stringify(this.loggedInUser));
    console.log(this.loggedInUser);
  }

  signUp (signUpForm: any) : Observable<User>{
    let registrationUrl = "http://localhost:9091/capcafe/add";
    return this.http.post<User>(registrationUrl, signUpForm);
  }

  login (empId: string, password: string): Observable<User> {
    let loginUrl = "http://localhost:9091/capcafe/login/" + empId + "/" + password;
    return this.http.get<User>(loginUrl);
  }

  profile () : User {
    //console.log(this.loggedInUser);
    return this.loggedInUser;
  }

  clearUser () : void {
    this.loggedInUser = null;
    sessionStorage.clear();
  }

  updateUserDetails (form : any) : Observable<User> {
    let updateUrl = "http://localhost:9091/capcafe/update";
    return this.http.post<User>(updateUrl, form);
  }
}
