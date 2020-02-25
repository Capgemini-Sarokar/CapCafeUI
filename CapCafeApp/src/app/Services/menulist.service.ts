import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Menu } from '../models/menu';
import { Ordering } from '../models/ordering';

const httpOptions ={
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class MenuListService{
  [x: string]: any;
    constructor(private http:HttpClient) {}
   //private userUrl = '/api';
   private userUrl = 'http://localhost:9093/menu'


   getFoodByCafeId(cafeId: string) {
    return this.http.get<Menu[]>(this.userUrl +"/getFoodByCafeId"+ '/' + cafeId);
  }

   getFoodById(menu) {
    return this.http.get<Menu>(this.userUrl +"/getFoodById"+ '/' + menu.foodId);
  }

  private userUrl1 = 'http://localhost:9093/order'
  public getOrders() {
      return this.http.get<Ordering[]>(this.userUrl1+"/getAllOrder");
    }
  
    public createOrder(order,menu) {
      return this.http.post<Menu>(this.userUrl1 + "/addOrder", order);
    }

    public getMenu() {
      return this.http.get<Menu[]>(this.userUrl+"/getAllFood");
    }


}