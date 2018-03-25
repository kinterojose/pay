import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NavBarService } from '../../commons/services/nav-bar.service';

import { PaymentRequest } from '../../commons/models/payment-request';
import { PaymentRequestService } from '../../commons/services/payment-request.service';
import { WalletService } from '../../commons/services/wallet.service';
import { Wallet } from '../../commons/models/wallet';
import { BasicValidators } from '../shared/basic-validators';
import { Subscription } from "rxjs/Subscription";

@Component({
	selector: 'app-payment-request',
	templateUrl: './payment-request.component.html',
	styleUrls: ['./payment-request.component.css']
})
export class PaymentRequestComponent implements OnInit {
	id: Subscription;
	wallet: Wallet;
	name_wallet : string;
	paymentRequest: PaymentRequest;
	totalAmount: Number;

	form: FormGroup;

	constructor(
		formBuilder: FormBuilder,
		public nav: NavBarService,
		public paymentRequestService: PaymentRequestService,
		public walletService: WalletService,
		private route: ActivatedRoute,
		private router: Router) {
		this.totalAmount = 0;

		this.wallet = new Wallet();
		this.paymentRequest = new PaymentRequest();
		this.form = formBuilder.group({
			email: ['', [
				Validators.required
			]],
			amount: ['', [
				Validators.required
			]],
			totalAmount: ['', [
				Validators.required
			]],
			description: ['', [
				Validators.required
			]]
		});

	}

	ngOnInit() {
		this.nav.clientMenu();


		this.id = this.route.params.subscribe(params => {
			var id = params['id'];

			if (!id)
				return;
			this.wallet = new Wallet();

			/*let wallet = this.walletService.getWallet(id);
			this.wallet.id = wallet.id;
			this.wallet.amount = wallet.amount;
			this.wallet.currency = wallet.currency;*/
			/*this.walletService.getWallet(id)
				.subscribe(
					wallet => {
						this.wallet.id = wallet.id;
						this.wallet.amount = wallet.amount;
						this.wallet.currency = wallet.currency;
					},
					response => {
						if (response.status == 404) {
							this.router.navigate(['NotFound']);
						}
					}
				);*/
		});
	}

	save() {
		var result,
			router = this.router,
			paymentRequest = this.form.value,
			body = {
				payment_request: {
					"target_user": paymentRequest.email,
					"amount": paymentRequest.amount,
					"description": paymentRequest.description,
					"wallet": this.wallet
				}
			};
		//body sera la variable
		result = this.paymentRequestService.addTransfer(body);
		
		/*result.subscribe(response => {
			response.admin.id = 1;
			if((response == 200) || (response.admin.id > 0)){
				
				this.router.navigate(['panel/ubblet-transfer/'+response.ubblet_transfer.id+'/voucher']);
			}
		});*/
		this.router.navigate(['panel/payment-request/1/voucher']);
	}

	total_amount(){
		this.totalAmount = this.paymentRequest.amount * 0.05 + this.paymentRequest.amount;
	}

	confirmation() {
		this.paymentRequest = this.form.value;
		this.name_wallet = this.walletService.getWallet(this.id).currency.name;
	}

}

