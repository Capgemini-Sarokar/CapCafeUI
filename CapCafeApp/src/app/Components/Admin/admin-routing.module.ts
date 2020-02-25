import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CafeUserService } from 'src/app/Services/cafe-user.service';
import { CafeCafeService } from 'src/app/Services/cafe-cafe.service';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [ 
  { path: "", component: DashboardComponent }
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
export class AdminRoutingModule { }




