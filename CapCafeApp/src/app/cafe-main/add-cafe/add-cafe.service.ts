import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CafeService {
  constructor (private http : HttpClient) {

  }

  submitCafeForm (form : any) {
    let cafeUrl : string = "http://localhost:9092/capcafe/newCafe/" + form.cafeId + "/" + form.cafeName + "/" + form.cafeOwner + "/" + form.location; 
    this.http.post (cafeUrl, form).subscribe (
      data => {
        console.log("Received Data: ", data);
      }, error => {
        console.log("Received Error: ", error);
      }
    )
  }
}
