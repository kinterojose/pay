import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NavBarService } from '../../../commons/services/nav-bar.service';

import { PaymentRequest } from '../../../commons/models/payment-request';
import { PaymentRequestService } from '../../../commons/services/payment-request.service';
import { BasicValidators } from '../../shared/basic-validators';

@Component({
  selector: 'app-payment-person',
  templateUrl: './payment-person.component.html',
  styleUrls: ['./payment-person.component.css']
})
export class PaymentRequestPersonComponent implements OnInit {

  constructor(public nav: NavBarService) { }

  ngOnInit() {
    this.nav.clientMenu();
  }

}

