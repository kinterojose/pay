import { Routes, RouterModule } from '@angular/router';

import { ClientComponent } from './client.component';

const clientRoutes: Routes = [
  { path: 'panel', component: ClientComponent, pathMatch: 'full' }
];

export const clientRouter = RouterModule.forChild(clientRoutes);
