import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';

import { ClientComponent } from './client.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpModule
  ],
  declarations: [
    ClientComponent
  ],
  exports: [
    ClientComponent
  ],
  providers: []
})
export class ClientModule { }
