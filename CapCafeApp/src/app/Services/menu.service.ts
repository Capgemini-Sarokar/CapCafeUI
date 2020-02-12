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
    let foodByIdUrl = "http://localhost:9093/menu/getFoodByCafeId/" + cafeId;
    return this.http.get<Array<Menu>>(foodByIdUrl);
  }

  addFoodItem (form : any) : Observable<void> {
    let addFoodUrl = "http://localhost:9093/menu/addFoodItem";
    return this.http.post<void>(addFoodUrl, form);
  }

  removeMenuOfCafe (cafeId : string) : Observable<any> {
    let removeMenuUrl = "http://localhost:9093/menu/removeMenu/" + cafeId;
    return this.http.get<any>(removeMenuUrl);
  }
}
