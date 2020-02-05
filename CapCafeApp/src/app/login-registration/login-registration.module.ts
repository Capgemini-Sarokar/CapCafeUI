import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';          // Required for *ngFor
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomMaterialModule } from '.././material.module';

import { LoginRegistrationRoutingModule } from './login-registration-routing.module';

import { RegistrationComponent } from './registration/registration.component';
import { LoginRegistrationComponent } from './login-registration.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login.service';
import { RegistrationService } from './registration.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CustomMaterialModule,
    LoginRegistrationRoutingModule
  ],
  declarations: [
    LoginRegistrationComponent,
    RegistrationComponent,
    LoginComponent
  ],
  exports: [
    LoginRegistrationComponent
  ],
  providers: [
    LoginService,
    RegistrationService
  ]
})
export class LoginRegistrationModule {

}