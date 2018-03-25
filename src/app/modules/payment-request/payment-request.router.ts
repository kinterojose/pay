import { Routes, RouterModule } from '@angular/router';

import { PaymentRequestComponent } from './payment-request.component';
import { PaymentRequestVoucherComponent } from './payment-request-voucher/payment-request-voucher.component';
import { RequestPaymentWalletSelectorComponent } from "../../commons/components/request-payment-wallet-selector/request-payment-wallet-selector.component";

const paymentRequestRoutes: Routes = [
  { path: 'client/user/wallet/:id/payment-request', component: PaymentRequestComponent, pathMatch: 'full'  },
  { path: 'client/request-payment-wallet-selector', component: RequestPaymentWalletSelectorComponent },
  { path: 'panel/payment-request/:id/voucher', component: PaymentRequestVoucherComponent },
];

export const paymentRouter = RouterModule.forChild(paymentRequestRoutes);
