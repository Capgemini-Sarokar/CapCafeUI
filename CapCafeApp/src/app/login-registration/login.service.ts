import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor (private http : HttpClient) {

  }

  submitLoginForm (form : any) {
    let loginUrl : string = "http://localhost:9091/capcafe/login/" + form.employeeId + "/" + form.password; 
    this.http.get (loginUrl).subscribe (
      data => {
        console.log("Received Data: ", data);
        return data;
      }, error => {
        console.log("Received Error: ", error);
      }
    )
  }
}
