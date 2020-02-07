import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from '../models/user';

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/retry'; // don't forget the imports


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  public user : User;

  constructor (private http : HttpClient) {

  }

  submitRegistrationForm (form : any) {
    let promise = new Promise((resolve, reject) => {
      let registrationUrl : string = "http://localhost:9091/capcafe/add";
      this.http.post<User>(registrationUrl, form)
      .toPromise()
      .then(
        res => { // Success
          console.log(res);
          this.user = res;
          resolve();
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
      )
    });
    return promise;
  }
}
