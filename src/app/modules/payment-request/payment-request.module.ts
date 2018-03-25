import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';

import { PaymentRequestComponent } from './payment-request.component';
import { PaymentRequestService } from '../../commons/services/payment-request.service';
import { RequestPaymentWalletSelectorModule } from "../../commons/components/request-payment-wallet-selector/request-payment-wallet-selector.module";
import { PaymentRequestVoucherComponent } from './payment-request-voucher/payment-request-voucher.component';
import { PaymentRequestModalModule } from '../payment-request-confirm-modal/payment-request-confirm-modal.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule,
    RequestPaymentWalletSelectorModule,
    PaymentRequestModalModule
  ],
  declarations: [
    PaymentRequestComponent,
    PaymentRequestVoucherComponent
  ],
  exports: [
    PaymentRequestComponent
  ],
  providers: [
    PaymentRequestService
  ]
})
export class PaymentRequestModule { }
