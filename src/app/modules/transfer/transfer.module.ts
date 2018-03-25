import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';

import { TransferComponent } from './transfer.component';
import { TransferService } from '../../commons/services/transfer.service';
import { TransferPersonComponent } from './transfer-person/transfer-person.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule
  ],
  declarations: [
    TransferComponent,
    TransferPersonComponent
  ],
  exports: [
    TransferComponent
  ],
  providers: [
    TransferService
  ]
})
export class TransferModule { }
