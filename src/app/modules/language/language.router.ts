import { Routes, RouterModule } from '@angular/router';

import { LanguageComponent } from './language.component';
import {LanguageFormComponent} from "./language-form/language-form.component";
import { CountryManagementComponent } from "./country-management/country-management.component";

const languagesRoutes: Routes = [
  { path: 'admin-panel/language', component: LanguageComponent, pathMatch: 'full' },
  { path: 'admin-panel/language/new', component: LanguageFormComponent},
  { path: 'admin-panel/language/:id', component: LanguageFormComponent},
  { path: 'admin-panel/language/:id/country', component: CountryManagementComponent}
];

export const languagesRouting = RouterModule.forChild(languagesRoutes);
