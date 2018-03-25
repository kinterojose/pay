import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/*import { UserAuthGuard } from '../guards/user-auth.guard';
import { AuthStorageService } from '../../commons/services/auth-storage.service';*/

import { CryptoTransferComponent } from './crypto-transfer.component';
import { CryptoService } from '../../commons/services/crypto.service';
import { CryptoTransferService } from '../../commons/services/crypto-transfer.service';
import { Ng2DropdownModule } from 'ng2-material-dropdown';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule,
    Ng2DropdownModule,
    BrowserAnimationsModule
  ],
  declarations: [
    CryptoTransferComponent
  ],
  exports: [
    CryptoTransferComponent
  ],
  providers: [
    CryptoService,
    CryptoTransferService
  ]
})
export class CryptoTransferModule { }
