import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';

import { AdminHelpComponent } from './admin-help.component';
import { ClientHelpComponent } from './client-help.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpModule
  ],
  declarations: [
    AdminHelpComponent,
    ClientHelpComponent
  ],
  exports: [
    AdminHelpComponent,
    ClientHelpComponent
  ],
  providers: []
})
export class HelpModule { }
