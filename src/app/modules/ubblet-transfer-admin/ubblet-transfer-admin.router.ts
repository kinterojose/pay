import { Routes, RouterModule } from '@angular/router';

import { UbbletTransferAdminComponent } from './ubblet-transfer-admin.component';
import { UbbletTransferAdminFormComponent } from "./ubblet-transfer-admin-form/ubblet-transfer-admin-form.component";
//import { CountryManagementComponent } from "./country-management/country-management.component";

const ubblettransferadminRoutes: Routes = [
  { path: 'admin-panel/ubblet-transfer-admin', component: UbbletTransferAdminComponent, pathMatch: 'full' },
  { path: 'admin-panel/ubblet-transfer-admin/new', component: UbbletTransferAdminFormComponent},
  { path: 'admin-panel/ubblet-transfer-admin/:id', component: UbbletTransferAdminFormComponent},
  //{ path: 'admin-panel/ubblet-transfer-admin/:id/country', component: CountryManagementComponent}
];

export const ubbletTransferAdminRouter = RouterModule.forChild(ubblettransferadminRoutes);
