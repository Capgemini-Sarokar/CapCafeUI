import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MenuOrderComponent } from './menu-order.component';
import { MenuComponent } from './menu/menu.component';
import { AddMenuComponent } from './menu/add-menu.component';

const routes: Routes = [
  { path: '', component: MenuOrderComponent,
  children: [
    { path: 'menus', component: MenuComponent },
    { path: 'add', component: AddMenuComponent }
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
