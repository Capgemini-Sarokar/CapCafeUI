import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MenuOrderComponent } from './menu-order.component';
import { ViewMenuComponent } from './view-menu/view-menu.component';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { UpdateMenuComponent } from './update-menu/update-menu.component';
import { RemoveMenuComponent } from './remove-menu/remove-menu.component';

const routes: Routes = [
  { path: '', component: MenuOrderComponent,
  children: [
    { path: 'viewMenu', component: ViewMenuComponent },
    { path: 'addMenu', component: AddMenuComponent },
    { path: 'updateMenu', component: UpdateMenuComponent },
    { path: 'removeMenu', component: RemoveMenuComponent }
  ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class MenuOrderRoutingModule { }
