import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelpdeskComponent } from './helpdesk/helpdesk.component';
import { AddCafeComponent } from './add-cafe/add-cafe.component';
import { RemoveCafeComponent } from './remove-cafe/remove-cafe.component';
import { UpdateCafeComponent } from './update-cafe/update-cafe.component';
import { ViewCafeComponent } from './view-cafe/view-cafe.component';

const routes: Routes = [
  { path:'add-cafe', component: AddCafeComponent },
  { path: 'remove-cafe', component: RemoveCafeComponent},
  { path: 'update-cafe', component: UpdateCafeComponent},
  { path: 'view-cafe', component: ViewCafeComponent},
  { path: 'helpdesk', component: HelpdeskComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
