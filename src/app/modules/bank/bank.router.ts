import { Routes, RouterModule } from '@angular/router';

import { BankComponent } from './bank.component';
import { BankFormComponent } from "./bank-form/bank-form.component";

const bankRoutes: Routes = [
  { path: 'admin-panel/bank', component: BankComponent, pathMatch: 'full' },
  { path: 'admin-panel/bank/new', component: BankFormComponent},
  { path: 'admin-panel/bank/:id', component: BankFormComponent},
];

export const bankRouter = RouterModule.forChild(bankRoutes);


