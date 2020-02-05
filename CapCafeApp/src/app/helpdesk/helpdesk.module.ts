import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelpdeskRoutingModule } from './helpdesk-routing.module';
import { HelpDeskComponent } from './helpdesk.component';
import { HelpdeskFormComponent } from './helpdesk-form/helpdesk-form.component';

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

