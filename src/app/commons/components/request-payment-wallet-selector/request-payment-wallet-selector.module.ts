import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';

import { UbbletTransferService } from '../../services/ubblet-transfer.service';
import { RequestPaymentWalletSelectorComponent } from './request-payment-wallet-selector.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule
  ],
  declarations: [
    RequestPaymentWalletSelectorComponent
  ],
  exports: [
    RequestPaymentWalletSelectorComponent
  ],
  providers: [
    UbbletTransferService
  ]
})
export class RequestPaymentWalletSelectorModule { }
