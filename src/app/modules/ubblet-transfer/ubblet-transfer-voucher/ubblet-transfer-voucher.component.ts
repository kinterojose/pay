import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NavBarService } from '../../../commons/services/nav-bar.service';

import { UbbletTransfer } from '../../../commons/models/ubblet-transfer';
import { UbbletTransferService } from '../../../commons/services/ubblet-transfer.service';
import { BasicValidators } from '../../shared/basic-validators';
import { Subscription } from "rxjs/Rx";
import { Wallet } from "app/commons/models/wallet";

@Component({
	selector: 'ubblet-transfer-voucher',
	templateUrl: './ubblet-transfer-voucher.component.html',
	styleUrls: ['./ubblet-transfer-voucher.component.css']
})
export class UbbletTransferVoucherComponent implements OnInit {
	ubbletTransfer: UbbletTransfer;
	id: Subscription;

	constructor(public nav: NavBarService,
		private route: ActivatedRoute,
		private router: Router,
		public ubbletTransferService: UbbletTransferService
	) { }

	ngOnInit() {
		this.nav.clientMenu();


		this.id = this.route.params.subscribe(params => {
			var id = params['id'];
			if (!id)
				return;
			
			this.ubbletTransfer = new UbbletTransfer();
			let ubbletTransfer = this.ubbletTransferService.getTransfer(id);
			this.ubbletTransfer.id = ubbletTransfer.ubblet_transfer.id;
			this.ubbletTransfer.code = ubbletTransfer.ubblet_transfer.code;
			this.ubbletTransfer.target_user = ubbletTransfer.ubblet_transfer.target_user;
			this.ubbletTransfer.amount = ubbletTransfer.ubblet_transfer.amount;
			this.ubbletTransfer.fee = ubbletTransfer.ubblet_transfer.fee;
			this.ubbletTransfer.description = ubbletTransfer.ubblet_transfer.description;
			this.ubbletTransfer.created_at = ubbletTransfer.ubblet_transfer.created_at;
			let wallet = new Wallet();
			wallet.id = ubbletTransfer.ubblet_transfer.wallet.id;
			this.ubbletTransfer.wallet = wallet;
			/*var id = params['id'];

			if (!id)
				return;
			this.ubbletTransfer = new UbbletTransfer();

			let ubbletTransfer = this.ubbletTransferService.getTransfer(id);
			this.ubbletTransfer.id = ubbletTransfer.ubblet_transfer.id;
			this.ubbletTransfer.amount = ubbletTransfer.ubblet_transfer.amount;
			this.ubbletTransfer.description = ubbletTransfer.ubblet_transfer.description;
			this.ubbletTransfer.created_at = ubbletTransfer.ubblet_transfer.created_at;
			this.ubbletTransfer.wallet = ubbletTransfer.ubblet_transfer.wallet;*/
			/*this.ubbletTransfer Service.getWallet(id)
				.subscribe(
					ubbletTransfer  => {
						this.ubbletTransfer .id = ubbletTransfer.ubblet_transfer .id;
						this.ubbletTransfer .amount = ubbletTransfer.ubblet_transfer .amount;
						this.ubbletTransfer .currency = ubbletTransfer.ubblet_transfer .currency;
					},
					response => {
						if (response.status == 404) {
							this.router.navigate(['NotFound']);
						}
					}
				);*/
		});
	}

}

