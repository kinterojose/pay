import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';
/*import { UserAuthGuard } from '../guards/user-auth.guard';
import { AuthStorageService } from '../../commons/services/auth-storage.service';*/

import { BalanceComponent } from './balance.component';
import { Wb21TransferReceiptComponent } from './wb21-transfer-receipt/wb21-transfer-receipt.component';
import { BalanceService } from '../../commons/services/balance.service';
import { TransferService } from '../../commons/services/transfer.service';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule,
    MultiselectDropdownModule
  ],
  declarations: [
    BalanceComponent,
    Wb21TransferReceiptComponent
  ],
  exports: [
    BalanceComponent,
    Wb21TransferReceiptComponent
  ],
  providers: [
    BalanceService,
    TransferService
    /*UserAuthGuard,
    AuthStorageService*/
  ]
})
export class BalanceModule { }
