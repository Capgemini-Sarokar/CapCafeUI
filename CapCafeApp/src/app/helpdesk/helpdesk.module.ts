import { NgModule } from '@angular/core';           //required for *ngFor
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { ReactiveFormsModule } from '@angular/forms';
//import { HttpClientModule } from '@angular/common/http';
//import { CustomMaterialModule } from '.././material.module';

import { HelpdeskRoutingModule } from './helpdesk-routing.module';
import { HelpDeskComponent } from './helpdesk.component';
import { HelpdeskFormComponent } from './helpdesk-form/helpdesk-form.component';
//import { HelpdeskService } from './helpdesk.service';


@NgModule({
  imports: [
    CommonModule,
    HelpdeskRoutingModule
  ],
  declarations: [
    HelpDeskComponent,
    HelpdeskFormComponent,
  ],
  exports: [],
  providers: []
})
export class HelpdeskModule { }

