import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CafeUserService } from 'src/app/Services/cafe-user.service';
import { CafeCafeService } from 'src/app/Services/cafe-cafe.service';
import { ViewCafeComponent } from './view-cafe/view-cafe.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { PaymentsComponent } from './payments/payments.component';
import { OrderListComponent } from './order-list/order-list.component';

const routes: Routes = [ 
  { path: "", component: ViewCafeComponent, children: [
    { path: "menulist", component: MenuListComponent },
    { path: "orders", component: OrderListComponent }
  ] },
  { path: "payments", component: PaymentsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    CafeCafeService,
    CafeUserService
  ]
})
export class UserRoutingModule { }




