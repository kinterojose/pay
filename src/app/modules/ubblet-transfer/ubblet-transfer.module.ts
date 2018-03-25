import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';

import { UbbletTransferComponent } from './ubblet-transfer.component';
import { UbbletTransferService } from '../../commons/services/ubblet-transfer.service';
import { WalletSelectorModule } from "../../commons/components/wallet-selector/wallet-selector.module";
import { UbbletTransferVoucherComponent } from './ubblet-transfer-voucher/ubblet-transfer-voucher.component';
import { UbbletTransferModalModule } from '../ubblet-transfer-confirm-modal/ubblet-transfer-confirm-modal.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule,
    WalletSelectorModule,
    UbbletTransferModalModule
  ],
  declarations: [
    UbbletTransferComponent,
    UbbletTransferVoucherComponent
  ],
  exports: [
    UbbletTransferComponent
  ],
  providers: [
    UbbletTransferService
  ]
})
export class UbbletTransferModule { }
