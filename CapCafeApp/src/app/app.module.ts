import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CustomMaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/Shared/navbar/navbar.component';
import { LoginComponent } from './Components/Shared/login/login.component';
import { RegistrationComponent } from './Components/Shared/registration/registration.component';
import { ProfileComponent } from './Components/Shared/profile/profile.component';
import { CafeMainComponent } from './Components/cafe-main/cafe-main.component';

import { CafeUserService } from './Services/cafe-user.service';
import { CafeCafeService } from './Services/cafe-cafe.service';
import { HelpdeskComponent } from './Components/User/helpdesk/helpdesk.component';
import { HomepageComponent } from './Components/Shared/homepage/homepage.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    LoginComponent,
    RegistrationComponent,
    ProfileComponent,
    CafeMainComponent,
    HelpdeskComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    CafeUserService,
    CafeCafeService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
