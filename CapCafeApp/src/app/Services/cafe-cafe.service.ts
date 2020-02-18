import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cafe } from '../models/cafe.model';

@Injectable({
  providedIn: 'root'
})
export class CafeCafeService {

  constructor(private http: HttpClient) { 

  }

  getAllCafeDetails () : Observable<Array<Cafe>>{
    let allCafeUrl = "http://localhost:9095/cafe-portal/viewAllCafes";
    return this.http.get<Array<Cafe>>(allCafeUrl);
  }

  removeCafe (cafeId : string) : Observable<boolean> {
    let removeCafeUrl = "http://localhost:9095/cafe-portal/remove/" + cafeId;
    return this.http.get<boolean>(removeCafeUrl);
  }

  addCafe (form : any) : Observable<void> {
    let addCafeUrl = "http://localhost:9095/cafe-portal/addCafe";
    return this.http.post<void>(addCafeUrl, form);
  }

  updateCafe (form : any) : Observable<void> {
    let updateCafeUrl = "http://localhost:9095/cafe-portal/updateCafe";
    return this.http.post<void>(updateCafeUrl, form);
  }
}
