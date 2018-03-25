import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';

import { UbbletTransferConfirmModalComponent } from './ubblet-transfer-confirm-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule
  ],
  declarations: [
    UbbletTransferConfirmModalComponent
  ],
  exports: [
    UbbletTransferConfirmModalComponent
  ],
  providers: []
})
export class UbbletTransferModalModule { }