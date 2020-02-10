import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Menu} from 'src/app/models/menu.model';

const httpOptions ={
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class MenuService{
    constructor(private http:HttpClient) {}
   //private userUrl = '/api';
   private userUrl = 'http://localhost:9093/user-portal/menu'
    public getMenu() {
        return this.http.get<Menu[]>(this.userUrl);
      }
      public deleteMenu(menu) {
        return this.http.delete(this.userUrl + "/"+ menu.foodId);
      }

      public createMenu(menu) {
        return this.http.post<Menu>(this.userUrl, menu);
      }
}