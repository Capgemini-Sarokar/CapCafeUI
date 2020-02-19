import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CustomMaterialModule } from 'src/app/material.module';
import { AdminRoutingModule } from './admin-routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CafeWidgetComponent } from './cafe-widget/cafe-widget.component';


@NgModule({
  declarations: [
    DashboardComponent,
    CafeWidgetComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CustomMaterialModule,
    ReactiveFormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
