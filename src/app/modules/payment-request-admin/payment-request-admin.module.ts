import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';

import { PaymentRequestAdminComponent } from './payment-request-admin.component';
import { PaymentRequestAdminService } from '../../commons/services/payment-request-admin.service';
import { PaymentRequestAdminFormComponent } from './payment-request-admin-form/payment-request-admin-form.component';
//import { CountryManagementComponent } from "./country-management/country-management.component";
//import { CountryAddComponent } from "./country-management/country-add.component";

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
    PaymentRequestAdminComponent,
    PaymentRequestAdminFormComponent,
    /*CountryManagementComponent,
    CountryAddComponent*/
  ],
  exports: [
    PaymentRequestAdminComponent,
    /*CountryManagementComponent,
    CountryAddComponent*/
  ],
  providers: [
    PaymentRequestAdminService
  ]
})
export class PaymentRequestAdminModule { }
