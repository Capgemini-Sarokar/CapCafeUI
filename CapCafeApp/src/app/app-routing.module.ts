import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CafeComponent } from './cafe/cafe.component';
import { HelpdeskComponent } from './helpdesk/helpdesk.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { OrdersComponent } from './orders/orders.component';
import { ReviewsComponent } from './reviews/reviews.component';

const routes: Routes = [
  {path:'cafe',component: CafeComponent},
  {path: 'helpdesk', component: HelpdeskComponent},
  {path: 'login', component: LoginComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'orders', component: OrdersComponent},
  {path: 'reviews', component: ReviewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
