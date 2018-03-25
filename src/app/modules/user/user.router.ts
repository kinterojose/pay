import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';

const userRoutes: Routes = [
  { path: 'user/profile', component: UserComponent, pathMatch: 'full' }
];

export const userRouting = RouterModule.forChild(userRoutes);
