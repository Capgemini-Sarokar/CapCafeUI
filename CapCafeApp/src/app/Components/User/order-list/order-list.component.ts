import { Component, OnInit } from '@angular/core';
import { Ordering } from 'src/app/models/ordering';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/Services/orderlist.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders: Ordering[];

  constructor(private router: Router, private menuService: OrderService) { 

  }

  ngOnInit() {
    this.menuService.getOrders()
      .subscribe(data => {
        this.orders = data;
    });
  }

}
