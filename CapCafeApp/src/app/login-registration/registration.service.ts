import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  constructor (private http : HttpClient) {

  }

  submitRegistrationForm (form : any) {
    let registrationUrl : string = "http://localhost:9091/capcafe/add"; 
    this.http.post (registrationUrl, form).subscribe (
      data => {
        console.log("Received Data: ", data);
      }, error => {
        console.log("Received Error: ", error);
      }
    )
  }
}
