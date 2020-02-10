import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CafeUserService {

  private loggedInUser : User = null;

  constructor(private http: HttpClient) { 

  }

  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) { //client side error
      errorMessage = `Error: ${error.error.message}`;
    }
    else { //server side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.error}`;
    }
    window.alert(errorMessage);
    return throwError(error.error)
  }

  role () : string{
    return sessionStorage.getItem('role');
  }

  saveUser (user: User) : void {
    console.log(user);
    this.loggedInUser = user;
    console.log(this.loggedInUser);
  }

  signUp (signUpForm: any) : Observable<User>{
    let registrationUrl = "http://localhost:9091/capcafe/add"
    return this.http.post<User>(registrationUrl, signUpForm);
  }

  login (empId: string, password: string): Observable<User> {
    let loginUrl = "http://localhost:9091/capcafe/login/" + empId + "/" + password
    return this.http.get<User>(loginUrl);
  }

  profile () : User {
    console.log(this.loggedInUser);
    return this.loggedInUser;
  }
}
