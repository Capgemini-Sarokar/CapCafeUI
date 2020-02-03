import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CafeComponent } from './cafe/cafe.component';

const routes: Routes = [
  {path:'cafe', component: CafeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
