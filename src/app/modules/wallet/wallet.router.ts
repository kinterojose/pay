import { Routes, RouterModule } from '@angular/router';

import { WalletComponent } from './wallet.component';
import { WalletSelectorComponent2 } from './wallet-selector2/wallet-selector2.component';
import { SingleWalletComponent } from './single-wallet/single-wallet.component';
import { FormWalletComponent } from "app/modules/wallet/form-wallet/form-wallet.component";

const walletRoutes: Routes = [
  { path: 'client/wallet', component: WalletComponent, pathMatch: 'full' },
  { path: 'client/wallet-selector', component: WalletSelectorComponent2 },
  { path: 'client/wallet/create', component: FormWalletComponent },
  { path: 'client/wallet/:id', component: SingleWalletComponent },
];

export const walletRouter = RouterModule.forChild(walletRoutes);
