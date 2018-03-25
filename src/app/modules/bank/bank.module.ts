import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';

import { BankService } from '../../commons/services/bank.service';
import { BankComponent } from './bank.component';
import { BankFormComponent } from './bank-form/bank-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule
  ],
  declarations: [
    BankComponent,
    BankFormComponent
  ],
  exports: [
    BankComponent,
    BankFormComponent
  ],
  providers: [
    BankService
  ]
})
export class BankModule { }
