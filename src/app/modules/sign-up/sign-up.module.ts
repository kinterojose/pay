import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';

import { SignUpComponent } from './sign-up.component';
import { signUpRouting } from 'app/modules/sign-up/sign-up.router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule
  ],
  declarations: [
    SignUpComponent
  ],
  exports: [
    SignUpComponent
  ],
  providers: []
})
export class SignUpModule { }
