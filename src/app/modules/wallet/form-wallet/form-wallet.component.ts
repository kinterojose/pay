import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { BasicValidators } from '../../shared/basic-validators';
import { NavBarService } from '../../../commons/services/nav-bar.service';
import { WalletService } from '../../../commons/services/wallet.service';
import { CurrencyService } from '../../../commons/services/currency.service';
import { Subscription } from "rxjs/Subscription";
import { Wallet } from "app/commons/models/wallet";
import { Currency } from "app/commons/models/currency";

@Component({
	selector: 'form-wallet',
	templateUrl: './form-wallet.component.html',
	styleUrls: ['./form-wallet.component.css']
})
export class FormWalletComponent implements OnInit {
	currencies: Currency[];
	id: Subscription;
	wallet: Wallet;

	constructor(
		public nav: NavBarService,
		private route: ActivatedRoute,
		private router: Router,
		public walletService: WalletService,
		public currencyService: CurrencyService,
		/*public transactionService: TransactionService*/
	) {

		this.wallet = new Wallet();
	}

	ngOnInit() {
		this.nav.clientMenu();
		this.currencies = this.currencyService.getCurrencies();
	}

	save(id) {
		console.log(id)
		var result,
			router = this.router,
			body = {
				"wallet":{
					"currency":{
						"id": id
					}
				}
			};
		//body sera la variable
		result = this.walletService.addWallet(body);

		/*result.subscribe(response => {
			response.admin.id = 1;
			if((response == 200) || (response.admin.id > 0)){
				
				this.router.navigate(['/client/wallet']);
			}
		});*/
		this.router.navigate(['/client/wallet']);
	}
}