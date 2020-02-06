import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CafeViewComponent } from './cafe-view/cafe-view.component';
import { CafeMainComponent } from './cafe-main.component';
import { AddCafeComponent } from './add-cafe/add-cafe.component';
import { UpdateCafeComponent } from './update-cafe/update-cafe.component';
import { RemoveCafeComponent } from './remove-cafe/remove-cafe.component';

const routes: Routes = [
  { path:"", component: CafeMainComponent, 
    children: [
      { path: "viewCafe", component: CafeViewComponent },
      { path: "addCafe", component: AddCafeComponent },
      { path: "updateCafe", component: UpdateCafeComponent },
      { path: "removeCafe", component: RemoveCafeComponent }
    ]
  },
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
export class CafeMainRoutingModule { }
