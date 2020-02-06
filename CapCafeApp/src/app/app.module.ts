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
import { AddMenuComponent } from './add-menu/add-menu.component';
import { RemoveMenuComponent } from './remove-menu/remove-menu.component';
import { UpdateMenuComponent } from './update-menu/update-menu.component';
import { ViewMenuComponent } from './view-menu/view-menu.component';
import { ViewHelpdeskComponent } from './view-helpdesk/view-helpdesk.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HelpdeskComponent,
    AddCafeComponent,
    RemoveCafeComponent,
    UpdateCafeComponent,
    ViewCafeComponent,
    AddMenuComponent,
    RemoveMenuComponent,
    UpdateMenuComponent,
    ViewMenuComponent,
    ViewHelpdeskComponent
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
