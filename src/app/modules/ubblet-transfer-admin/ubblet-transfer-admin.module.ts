import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';

import { UbbletTransferAdminComponent } from './ubblet-transfer-admin.component';
import { UbbletTransferAdminService } from '../../commons/services/ubblet-transfer-admin.service';
import { UbbletTransferAdminFormComponent } from './ubblet-transfer-admin-form/ubblet-transfer-admin-form.component';
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
    UbbletTransferAdminComponent,
    UbbletTransferAdminFormComponent,
    /*CountryManagementComponent,
    CountryAddComponent*/
  ],
  exports: [
    UbbletTransferAdminComponent,
    /*CountryManagementComponent,
    CountryAddComponent*/
  ],
  providers: [
    UbbletTransferAdminService
  ]
})
export class UbbletTransferAdminModule { }
