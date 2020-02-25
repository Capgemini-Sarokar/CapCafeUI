import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CustomMaterialModule } from 'src/app/material.module';
import { UserRoutingModule } from './user-routing.module';
import { ViewCafeComponent } from './view-cafe/view-cafe.component';
import { FooterComponent } from './footer/footer.component';
import { UserNavComponent } from './user-nav/user-nav.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MenuListComponent } from './menu-list/menu-list.component';
import { MenuService } from 'src/app/Services/menu.service';
import { OrderService } from 'src/app/Services/orderlist.service';
import { MenuListService } from 'src/app/Services/menulist.service';
import { PaymentsComponent } from './payments/payments.component';
import { OrderListComponent } from './order-list/order-list.component';

@NgModule({
  declarations: [
    ViewCafeComponent,
    FooterComponent,
    UserNavComponent,
    MenuListComponent,
    PaymentsComponent,
    OrderListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CustomMaterialModule,
    ReactiveFormsModule,
    MDBBootstrapModule,
    UserRoutingModule
  ],
  providers: [
    MenuService,
    MenuListService,
    OrderService
  ]
})
export class UserModule { }
