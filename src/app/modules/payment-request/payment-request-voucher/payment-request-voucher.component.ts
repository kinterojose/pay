import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NavBarService } from '../../../commons/services/nav-bar.service';

import { PaymentRequest } from '../../../commons/models/payment-request';
import { PaymentRequestService } from '../../../commons/services/payment-request.service';
import { BasicValidators } from '../../shared/basic-validators';
import { Subscription } from "rxjs/Rx";
import { Wallet } from "app/commons/models/wallet";

@Component({
	selector: 'payment-request-voucher',
	templateUrl: './payment-request-voucher.component.html',
	styleUrls: ['./payment-request-voucher.component.css']
})
export class PaymentRequestVoucherComponent implements OnInit {
	paymentRequest: PaymentRequest;
	id: Subscription;

	constructor(public nav: NavBarService,
		private route: ActivatedRoute,
		private router: Router,
		public paymentRequestService: PaymentRequestService
	) { }

	ngOnInit() {
		this.nav.clientMenu();


		this.id = this.route.params.subscribe(params => {
			var id = params['id'];
			if (!id)
				return;
			
			this.paymentRequest = new PaymentRequest();
			let paymentRequest = this.paymentRequestService.getTransfer(id);
			this.paymentRequest.id = paymentRequest.payment_request.id;
			this.paymentRequest.code = paymentRequest.payment_request.code;
			this.paymentRequest.target_user = paymentRequest.payment_request.target_user;
			this.paymentRequest.amount = paymentRequest.payment_request.amount;
			this.paymentRequest.fee = paymentRequest.payment_request.fee;
			this.paymentRequest.description = paymentRequest.payment_request.description;
			this.paymentRequest.created_at = paymentRequest.payment_request.created_at;
			let wallet = new Wallet();
			wallet.id = paymentRequest.payment_request.wallet.id;
			this.paymentRequest.wallet = wallet;
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

