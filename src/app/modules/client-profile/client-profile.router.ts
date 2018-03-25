import { Routes, RouterModule } from '@angular/router';

import { ClientProfileComponent } from './client-profile.component';
//import { ClientComponent } from "../../commons/components/client-profile/client-profile.component";

const clientProfileRoutes: Routes = [
  { path: 'client-profile/profile', component: ClientProfileComponent, pathMatch: 'full' },
  //{ path: 'client/profile', component: ClientComponent },
];

export const clientProfileRouter = RouterModule.forChild(clientProfileRoutes);
