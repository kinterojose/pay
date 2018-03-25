import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';

import { CurrencyComponent } from './currency.component';
import { CurrencyService } from '../../commons/services/currency.service';
import { CurrencyFormComponent } from './currency-form/currency-form.component';
import { CountryManagementComponent } from "./country-management/country-management.component";
import { CountryAddComponent } from "./country-management/country-add.component";

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
    CurrencyComponent,
    CurrencyFormComponent,
    CountryManagementComponent,
    CountryAddComponent
  ],
  exports: [
    CurrencyComponent,
    CountryManagementComponent,
    CountryAddComponent
  ],
  providers: [
    CurrencyService
  ]
})
export class CurrencyModule { }
