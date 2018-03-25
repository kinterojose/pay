import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';

import { UbbletTransferService } from '../../services/ubblet-transfer.service';
import { WalletSelectorComponent } from './wallet-selector.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule
  ],
  declarations: [
    WalletSelectorComponent
  ],
  exports: [
    WalletSelectorComponent
  ],
  providers: [
    UbbletTransferService
  ]
})
export class WalletSelectorModule { }
