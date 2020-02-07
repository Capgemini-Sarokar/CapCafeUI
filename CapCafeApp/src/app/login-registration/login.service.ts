import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public user : User;

  constructor (private http : HttpClient) {

  }

  submitLoginForm(form : any) : Promise<any> {
    let promise = new Promise((resolve, reject) => {
      let loginUrl : string = "http://localhost:9091/capcafe/login/" + form.employeeId + "/" + form.password;
      this.http.get<User>(loginUrl).toPromise().then(
        res => { // Success
          console.log(res);
          this.user = res;
          resolve(this.user);
        },
        err => {
          console.log(err);
          if (err.error instanceof Error) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', err.error.message);
            resolve(null);
          } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(`Backend returned code ${err.status}, body was: ${err.error}`);
            resolve(null);
          }
        }
      );
    });
    return promise;
  }
}
