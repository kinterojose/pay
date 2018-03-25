import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NavBarService } from '../../../commons/services/nav-bar.service';

import { Transfer } from '../../../commons/models/transfer';
import { TransferService } from '../../../commons/services/transfer.service';
import { BasicValidators } from '../../shared/basic-validators';

@Component({
  selector: 'app-transfer-person',
  templateUrl: './transfer-person.component.html',
  styleUrls: ['./transfer-person.component.css']
})
export class TransferPersonComponent implements OnInit {

  constructor(public nav: NavBarService) { }

  ngOnInit() {
    this.nav.clientMenu();
  }

}

