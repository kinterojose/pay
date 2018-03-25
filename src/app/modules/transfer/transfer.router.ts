import { Routes, RouterModule } from '@angular/router';

import { TransferComponent } from './transfer.component';
import { TransferPersonComponent } from "./transfer-person/transfer-person.component";

const transferRoutes: Routes = [
  { path: 'panel/transfer', component: TransferComponent, pathMatch: 'full' },
  { path: 'panel/transfer/new', component: TransferPersonComponent },
  { path: 'panel/transfer/:id', component: TransferPersonComponent }
];

export const transferRouter = RouterModule.forChild(transferRoutes);
