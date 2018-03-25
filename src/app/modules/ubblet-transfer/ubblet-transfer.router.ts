import { Routes, RouterModule } from '@angular/router';

import { UbbletTransferComponent } from './ubblet-transfer.component';
import { UbbletTransferVoucherComponent } from './ubblet-transfer-voucher/ubblet-transfer-voucher.component';
import { WalletSelectorComponent } from "../../commons/components/wallet-selector/wallet-selector.component";

const transferRoutes: Routes = [
  { path: 'client/user/wallet/:id/ubblet-transfer', component: UbbletTransferComponent, pathMatch: 'full'  },
  { path: 'client/wallet-selector', component: WalletSelectorComponent },
  { path: 'panel/ubblet-transfer/:id/voucher', component: UbbletTransferVoucherComponent },
];

export const ubbletTransferRouter = RouterModule.forChild(transferRoutes);
