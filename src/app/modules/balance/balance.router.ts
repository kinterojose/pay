import { Routes, RouterModule } from '@angular/router';
import { BalanceComponent } from './balance.component';
import { Wb21TransferReceiptComponent } from './wb21-transfer-receipt/wb21-transfer-receipt.component';
/*import { UserAuthGuard } from '../guards/user-auth.guard';*/

const balanceRoutes: Routes = [
	{
		path: 'panel/balance/add', 
    	component: BalanceComponent,
    	/*canActivate: [UserAuthGuard] */
	},
  { path: 'panel/transfer/:code/wb21-receipt', component: Wb21TransferReceiptComponent }
];

export const balanceRouter = RouterModule.forChild(balanceRoutes);
