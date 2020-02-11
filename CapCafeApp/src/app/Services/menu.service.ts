import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Menu } from '../models/menu.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { 

  }

  getFoodItemsForCafe(cafeId : string) : Observable<Array<Menu>> {
    let foodByIdUrl = "http://localhost:9093/user-portal/menu/getFoodByCafeId/" + cafeId;
    return this.http.get<Array<Menu>>(foodByIdUrl);
  }
}
