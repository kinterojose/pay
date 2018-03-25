import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NavBarService } from '../../../commons/services/nav-bar.service';
import { WalletService } from '../../../commons/services/wallet.service';

@Component({
	selector: 'currency-selector',
	templateUrl: './currency-selector.component.html',
	styleUrls: ['./currency-selector.component.css']
})
export class CurrencySelectorComponent implements OnInit {
	wallets: Array<Object>;

	constructor(public nav: NavBarService,
		public walletService: WalletService,
		private router: Router,
		private location: Location) { }

	ngOnInit() {
		this.nav.clientMenu();
		this.wallets = this.walletService.allByCurrentUser();
		/*this.currencies = [
			{ id: 1, name: 'Foo', image: true },
			{ id: 2, name: 'Bar', image: false },
			{ id: 3, name: 'Baz', image: true },
			{ id: 4, name: 'Foo', image: true },
			{ id: 5, name: 'Foo', image: true },
			{ id: 6, name: 'Bar', image: false },
			{ id: 7, name: 'Baz', image: true },
			{ id: 8, name: 'Baz', image: true },
		];*/
	}
}

