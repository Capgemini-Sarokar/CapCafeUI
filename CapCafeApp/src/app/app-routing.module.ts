import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './Components/Shared/homepage/homepage.component';
import { LoginComponent } from './Components/Shared/login/login.component';
import { RegistrationComponent } from './Components/Shared/registration/registration.component';
import { ProfileComponent } from './Components/Shared/profile/profile.component';
import { HelpdeskComponent } from './Components/User/helpdesk/helpdesk.component';
import { UserLoginGuardService } from './Guards/user-login-guard.service';
import { CustomerGuardService } from './Guards/customer-guard.service';

const routes: Routes = [ 
  { path : "login", component : LoginComponent },
  { path : "registration", component : RegistrationComponent },
  { path : "profile", component : ProfileComponent, canActivate: [ UserLoginGuardService ]},
  { path : "", component : HomepageComponent, canActivate: [ UserLoginGuardService ] },
  { path : "helpdesk", component : HelpdeskComponent, canActivate: [ UserLoginGuardService, CustomerGuardService ] },
  { path : "admin-dashboard", loadChildren: () => import('./Components/Admin/admin.module').then(m => m.AdminModule) }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes, 
      { onSameUrlNavigation: 'reload'}
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }




