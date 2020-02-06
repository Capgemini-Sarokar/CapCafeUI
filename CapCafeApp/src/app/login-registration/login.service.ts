import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor (private http : HttpClient) {

  }

  submitLoginForm(form : any) : Promise<any> {
    let promise = new Promise((resolve, reject) => {
      let loginUrl : string = "http://localhost:9091/capcafe/login/" + form.employeeId + "/" + form.password;
      this.http.get(loginUrl).toPromise().then(
        res => { // Success
          console.log(res);
          resolve();
        },
        err => {
          console.log(err);
          reject();
        }
      );
    });
    return promise;
  }
}
