import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UbbletTransferService } from '../../../commons/services/ubblet-transfer.service';
import { SingleWalletComponent } from './single-wallet.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    SingleWalletComponent
  ],
  exports: [
    SingleWalletComponent
  ],
  providers: [
    UbbletTransferService
  ]
})
export class SingleWalletModule { }