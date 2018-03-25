import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';

import { ClientProfileComponent } from './client-profile.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpModule
  ],
  declarations: [
    ClientProfileComponent
  ],
  exports: [
    ClientProfileComponent
  ],
  providers: []
})
export class ClientProfileModule { }
