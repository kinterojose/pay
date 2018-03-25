import { Routes, RouterModule } from '@angular/router';

import { CurrencyComponent } from './currency.component';
import { CurrencyFormComponent } from "./currency-form/currency-form.component";
import { CountryManagementComponent } from "./country-management/country-management.component";

const currencyRoutes: Routes = [
  { path: 'admin-panel/currency', component: CurrencyComponent, pathMatch: 'full' },
  { path: 'admin-panel/currency/new', component: CurrencyFormComponent},
  { path: 'admin-panel/currency/:id', component: CurrencyFormComponent},
  { path: 'admin-panel/currency/:id/country', component: CountryManagementComponent}
];

export const currencyRouter = RouterModule.forChild(currencyRoutes);
