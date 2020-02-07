import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HelpdeskFormComponent } from './helpdesk-form/helpdesk-form.component';

const routes: Routes = [
  { path: '', component: HelpdeskFormComponent},
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
export class HelpdeskRoutingModule { }
