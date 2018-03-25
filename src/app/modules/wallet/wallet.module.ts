import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';

import { WalletService } from '../../commons/services/wallet.service';
import { WalletComponent } from './wallet.component';
import { WalletSelectorModule2 } from './wallet-selector2/wallet-selector2.module';
import { FormWalletModule } from './form-wallet/form-wallet.module';
import { SingleWalletModule } from './single-wallet/single-wallet.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    WalletSelectorModule2,
    FormWalletModule,
    SingleWalletModule,
    HttpModule
  ],
  declarations: [
    WalletComponent
  ],
  exports: [
    WalletComponent
  ],
  providers: [
    WalletService
  ]
})
export class WalletModule { }
