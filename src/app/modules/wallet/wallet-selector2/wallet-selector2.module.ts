import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';

import { UbbletTransferService } from '../../../commons/services/ubblet-transfer.service';
import { WalletSelectorComponent2 } from './wallet-selector2.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule
  ],
  declarations: [
    WalletSelectorComponent2
  ],
  exports: [
    WalletSelectorComponent2
  ],
  providers: [
    UbbletTransferService
  ]
})
export class WalletSelectorModule2 { }
