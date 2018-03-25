import { Routes, RouterModule } from '@angular/router';

import { AdminHelpComponent } from './admin-help.component';
import { ClientHelpComponent } from './client-help.component';

const helpRoutes: Routes = [
  { path: 'admin-panel/help', component: AdminHelpComponent},
  { path: 'panel/help', component: ClientHelpComponent}
];

export const helpRouter = RouterModule.forChild(helpRoutes);
