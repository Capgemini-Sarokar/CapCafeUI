import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelpdeskComponent } from './helpdesk/helpdesk.component';
import { AddCafeComponent } from './add-cafe/add-cafe.component';
import { RemoveCafeComponent } from './remove-cafe/remove-cafe.component';
import { UpdateCafeComponent } from './update-cafe/update-cafe.component';
import { ViewCafeComponent } from './view-cafe/view-cafe.component';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { ViewMenuComponent } from './view-menu/view-menu.component';
import { RemoveMenuComponent } from './remove-menu/remove-menu.component';
import { UpdateMenuComponent } from './update-menu/update-menu.component';
import { ViewHelpdeskComponent } from './view-helpdesk/view-helpdesk.component';


const routes: Routes = [
  { path:'add-cafe', component: AddCafeComponent },
  { path: 'remove-cafe', component: RemoveCafeComponent},
  { path: 'update-cafe', component: UpdateCafeComponent},
  { path: 'view-cafe', component: ViewCafeComponent},
  { path: 'helpdesk', component: HelpdeskComponent },
  { path: 'add-menu', component: AddMenuComponent },
  { path: 'remove-menu', component: RemoveMenuComponent },
  { path: 'update-menu', component: UpdateMenuComponent},
  { path: 'view-menu', component: ViewMenuComponent},
  { path: 'view-helpdesk', component: ViewHelpdeskComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
