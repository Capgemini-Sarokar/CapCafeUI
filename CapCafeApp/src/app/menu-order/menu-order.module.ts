import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMaterialModule } from '.././material.module';

import { MenuOrderRoutingModule } from './menu-order-routing.module';
import { MenuOrderComponent } from './menu-order.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule } from '@angular/forms';
import { AddMenuComponent } from './menu/add-menu.component';
import { MenuService } from './menu/menu.service';


@NgModule({
  declarations: [
    MenuOrderComponent,
    MenuComponent,
    AddMenuComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    CustomMaterialModule,
    MenuOrderRoutingModule
  ],
  exports: [

  ],
  providers: [
    MenuService
  ]
})
export class MenuOrderModule { }
