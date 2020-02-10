import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { CafeMainComponent } from './Components/cafe-main/cafe-main.component';

const routes: Routes = [ 
  { path : "login", component : LoginComponent },
  { path : "registration", component : RegistrationComponent },
  { path : "profile", component : ProfileComponent },
  { path : "", component : CafeMainComponent}
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




