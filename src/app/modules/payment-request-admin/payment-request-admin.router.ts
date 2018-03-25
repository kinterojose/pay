import { Routes, RouterModule } from '@angular/router';

import { PaymentRequestAdminComponent } from './payment-request-admin.component';
import { PaymentRequestAdminFormComponent } from "./payment-request-admin-form/payment-request-admin-form.component";
//import { CountryManagementComponent } from "./country-management/country-management.component";

const paymentrequestRoutes: Routes = [
  { path: 'admin-panel/payment-request-admin', component: PaymentRequestAdminComponent, pathMatch: 'full' },
  { path: 'admin-panel/payment-request-admin/new', component: PaymentRequestAdminFormComponent},
  { path: 'admin-panel/payment-request-admin/:id', component: PaymentRequestAdminFormComponent},
  //{ path: 'admin-panel/payment-request-admin/:id/country', component: CountryManagementComponent}
];

export const paymentRequestRouter = RouterModule.forChild(paymentrequestRoutes);
