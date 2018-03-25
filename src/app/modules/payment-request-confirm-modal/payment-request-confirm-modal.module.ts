import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';

import { PaymentRequestConfirmModalComponent } from './payment-request-confirm-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule
  ],
  declarations: [
    PaymentRequestConfirmModalComponent
  ],
  exports: [
    PaymentRequestConfirmModalComponent
  ],
  providers: []
})
export class PaymentRequestModalModule { }