import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMaterialModule } from '.././material.module';

import { ViewMenuComponent } from './view-menu/view-menu.component';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { UpdateMenuComponent } from './update-menu/update-menu.component';
import { RemoveMenuComponent } from './remove-menu/remove-menu.component';

import { MenuOrderRoutingModule } from './menu-order-routing.module';
import { MenuOrderComponent } from './menu-order.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ViewMenuComponent, 
    AddMenuComponent, 
    UpdateMenuComponent, 
    RemoveMenuComponent,
    MenuOrderComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    CustomMaterialModule,
    MenuOrderRoutingModule
  ],
  exports: [
    
  ]
})
export class MenuOrderModule { }
