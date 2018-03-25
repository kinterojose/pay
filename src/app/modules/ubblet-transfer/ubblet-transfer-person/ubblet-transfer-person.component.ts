import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NavBarService } from '../../../commons/services/nav-bar.service';

import { UbbletTransfer } from '../../../commons/models/ubblet-transfer';
import { UbbletTransferService } from '../../../commons/services/ubblet-transfer.service';
import { BasicValidators } from '../../shared/basic-validators';

@Component({
  selector: 'app-ubblet-transfer-person',
  templateUrl: './ubblet-transfer-person.component.html',
  styleUrls: ['./ubblet-transfer-person.component.css']
})
export class UbbletTransferPersonComponent implements OnInit {

  constructor(public nav: NavBarService) { }

  ngOnInit() {
    this.nav.clientMenu();
  }

}

