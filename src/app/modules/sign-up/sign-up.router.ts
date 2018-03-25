import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up.component';

const signUpRoutes: Routes = [
  { path: 'user/sign-up', component: SignUpComponent, pathMatch: 'full' }
];

export const signUpRouting = RouterModule.forChild(signUpRoutes);
