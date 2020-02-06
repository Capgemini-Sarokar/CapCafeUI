import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [ 
  { path:"loginRegistration", loadChildren: () => import(`./login-registration/login-registration.module`).then(m => m.LoginRegistrationModule) },
  { path:"", loadChildren: () => import('./cafe-main/cafe-main.module').then(m => m.CafeMainModule) },
  { path:"helpdesk", loadChildren: () => import("./helpdesk/helpdesk.module").then(m => m.HelpdeskModule) },
  { path:"menuorder", loadChildren: () => import("./menu-order/menu-order.module").then(m => m.MenuOrderModule) }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { onSameUrlNavigation: 'reload'}
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }




