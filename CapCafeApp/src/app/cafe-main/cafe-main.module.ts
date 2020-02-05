import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CafeViewComponent } from './cafe-view/cafe-view.component';
import { CustomMaterialModule } from '.././material.module';

import { CafeMainRoutingModule } from './cafe-main-routing.module';

import { CafeMainComponent } from './cafe-main.component';
import { AddCafeComponent } from './add-cafe/add-cafe.component';
import { UpdateCafeComponent } from './update-cafe/update-cafe.component';
import { RemoveCafeComponent } from './remove-cafe/remove-cafe.component';

@NgModule({
  imports: [
    CommonModule,
    CustomMaterialModule,
    CafeMainRoutingModule
  ],
  declarations: [
    CafeMainComponent,
    CafeViewComponent,
    AddCafeComponent,
    UpdateCafeComponent,
    RemoveCafeComponent
  ],
  exports: [],
  providers: []
})
export class CafeMainModule { }
