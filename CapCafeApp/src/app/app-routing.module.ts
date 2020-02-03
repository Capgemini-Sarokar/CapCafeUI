import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CafeComponent } from './cafe/cafe.component';
import { HelpdeskComponent } from './helpdesk/helpdesk.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';

const routes: Routes = [
  { path:'cafe', component: CafeComponent },
  { path:'helpdesk', component: HelpdeskComponent },
  { path:'login', component: LoginSignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
