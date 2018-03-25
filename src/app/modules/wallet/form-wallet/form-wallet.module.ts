import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WalletService } from '../../../commons/services/wallet.service';
import { FormWalletComponent } from './form-wallet.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    FormWalletComponent
  ],
  exports: [
    FormWalletComponent
  ],
  providers: [
    WalletService
  ]
})
export class FormWalletModule { }