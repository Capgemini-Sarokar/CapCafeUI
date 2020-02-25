import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ordering } from '../models/ordering';

const httpOptions ={
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class OrderService{
    constructor(private http:HttpClient) {}
   //private userUrl = '/api';
   private userUrl = 'http://localhost:9093/order'
    public getOrders() {
        return this.http.get<Ordering[]>(this.userUrl+"/getAllOrder");
      }
    
    

    }