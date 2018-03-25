import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';

import { LanguageComponent } from './language.component';
import { LanguageService } from './shared/language.service';
import { LanguageFormComponent } from './language-form/language-form.component';
import { CountryManagementComponent } from "./country-management/country-management.component";


import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule,
    MultiselectDropdownModule
  ],
  declarations: [
    LanguageComponent,
    LanguageFormComponent,
    CountryManagementComponent
  ],
  exports: [
    LanguageComponent,
    CountryManagementComponent
  ],
  providers: [
    LanguageService
  ]
})
export class LanguageModule { }
