import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { NavBarService } from '../../../commons/services/nav-bar.service';
import { WalletService } from '../../../commons/services/wallet.service';
import { TransactionService } from '../../../commons/services/transactions.service';
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { Wallet } from "app/commons/models/wallet";
import { Currency } from "app/commons/models/currency";

@Component({
	selector: 'single-wallet',
	templateUrl: './single-wallet.component.html',
	styleUrls: ['./single-wallet.component.css']
})
export class SingleWalletComponent implements OnInit {
	id: Subscription;
	wallet: Wallet;
	date = Date.now();

	constructor(
		public nav: NavBarService,
		private route: ActivatedRoute,
		private router: Router,
		public walletService: WalletService,
		/*public transactionService: TransactionService*/) { }

	ngOnInit() {
    	this.nav.clientMenu();


		this.id = this.route.params.subscribe(params => {
			var id = params['id'];
			if (!id)
				return;

			this.wallet = new Wallet();
			let wallet = this.walletService.getByCurrentUser(id);
			this.wallet.id = wallet.id;
			this.wallet.amount = wallet.amount;
			let currency = new Currency();
			this.wallet.currency = wallet.currency;
			console.log(this.wallet);
			/*var id = params['id'];

			if (!id)
				return;
			this.wallet = new Wallet();

			let wallet = this.walletService.getTransfer(id);
			this.wallet.id = wallet.id;
			this.wallet.amount = wallet.amount;
			let currency = new Currency();
			this.wallet.currency = wallet.currency;*/
			/*this.wallet Service.getWallet(id)
				.subscribe(
					wallet  => {
						this.wallet .id = wallet.ubblet_transfer .id;
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