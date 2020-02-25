import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { Menu } from 'src/app/models/menu.model';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import { Ordering } from 'src/app/models/ordering';
import { MenuListService } from 'src/app/Services/menulist.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {

  menus: Menu[];
  menu1: Menu;
  ordering: Ordering;
  menuForCafe: any;
  quantity: any;
  orderSummary = [];
  private cafeDataStructure: { [id: string]: Array<Menu>; } = {};
  displayedColumns: string[] = ['Food Id', 'Cafe Id', 'Food Name', 'Food Price', 'Food Quantity', 'Action']; z
  orders: Ordering = {
    orderId: null,
    cafeId: null,
    foodName: null,
    foodPrice: null,
    foodQuantity: null,
  }

  dataReceived: boolean = false;
  dataReceived1: boolean = false;

  kart = [];

  @ViewChild('myDiv', { static: false }) myDiv: ElementRef;



  constructor(private router: Router, private menuService: MenuListService, @Inject(DOCUMENT) document) { }

  ngOnInit() {

  }


  getFoodByCafeId(cafeId) {
    this.dataReceived = true;
    this.menuService.getFoodByCafeId(cafeId)
      .subscribe(data => {
        this.menus = data;
        for (let i = 0; i < this.menus.length; i++) {
          this.menuForCafe = this.menus[0];
          this.cafeDataStructure[this.menus[i].cafeId] = this.menuForCafe;
          console.log('this.cafeDataStructure');
        }
      });
  };

  dataSource = new MatTableDataSource<Menu>(this.menus);




  getFoodById(menu: Menu) {
    this.dataReceived1 = true;
    this.menuService.getFoodById(menu)
      .subscribe(data => {
        this.menu1 = data;
        console.log(this.menu1[0].cafeId)
        this.kart.push(this.menu1[0])
      });
  };

  createOrder(ordering: Ordering, menu1: Menu) {
    console.log(this.menu1[0].cafeId)
    console.log(this.orders.foodQuantity)
    this.orders.cafeId = this.menu1[0].cafeId;
    this.orders.foodName = this.menu1[0].foodName;
    this.orders.foodPrice = this.menu1[0].foodPrice;
    this.orders.foodQuantity = this.orders.foodQuantity;
    this.orderSummary.push(this.orders);
    console.log(this.orderSummary)
    this.menuService.createOrder(this.orderSummary, this.menu1)
      .subscribe(data => {

      });

  };

  payment(): void {
    this.router.navigate(['payments']);
  }

}
