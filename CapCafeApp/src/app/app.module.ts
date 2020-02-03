import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavbarComponent } from './navbar/navbar.component';
import { HelpdeskComponent } from './helpdesk/helpdesk.component';
import { AddCafeComponent } from './add-cafe/add-cafe.component';
import { RemoveCafeComponent } from './remove-cafe/remove-cafe.component';
import { UpdateCafeComponent } from './update-cafe/update-cafe.component';
import { ViewCafeComponent } from './view-cafe/view-cafe.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HelpdeskComponent,
    AddCafeComponent,
    RemoveCafeComponent,
    UpdateCafeComponent,
    ViewCafeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
