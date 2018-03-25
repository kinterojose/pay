import { Routes, RouterModule } from '@angular/router';
import { CryptoTransferComponent } from './crypto-transfer.component';

const cryptoTransferRoutes: Routes = [
	{
		path: 'panel/crypto/transfer', 
    	component: CryptoTransferComponent
	}
];

export const CryptoTransferRouter = RouterModule.forChild( cryptoTransferRoutes );
