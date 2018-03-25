import { Component, OnInit, Input} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NavBarService } from '../../commons/services/nav-bar.service';
import { UbbletTransfer } from '../../commons/models/ubblet-transfer';
import { UbbletTransferService } from '../../commons/services/ubblet-transfer.service';
import { WalletService } from '../../commons/services/wallet.service';
import { Wallet } from '../../commons/models/wallet';
import { BasicValidators } from '../shared/basic-validators';
import { Subscription } from "rxjs/Subscription";

declare var swal: any;

@Component({
	selector: 'app-ubblet-transfer',
	templateUrl: './ubblet-transfer.component.html',
	styleUrls: ['./ubblet-transfer.component.css'],

})

export class UbbletTransferComponent implements OnInit {
	id: Subscription;
	wallet: Wallet;
	name_wallet: string;
	ubbletTransfer: UbbletTransfer;
	totalAmount: Number;
	form: FormGroup;

	constructor(
		formBuilder: FormBuilder,
		public nav: NavBarService,
		public ubbletTransferService: UbbletTransferService,
		public walletService: WalletService,
		private route: ActivatedRoute,
		private router: Router) {
		this.totalAmount = 0;
		this.wallet = new Wallet();
		this.ubbletTransfer = new UbbletTransfer();
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

	public save() {
		var result,
			router = this.router,
			ubbletTransfer = this.form.value,
			body = {
				ubblet_transfer: {
					"target_user": ubbletTransfer.email,
					"amount": ubbletTransfer.amount,
					"description": ubbletTransfer.description,
					"wallet": this.wallet
				}
			};
		//body sera la variable
		result = this.ubbletTransferService.addTransfer(body);
		
		/*result.subscribe(response => {
			response.admin.id = 1;
			if((response == 200) || (response.admin.id > 0)){
				
				this.router.navigate(['panel/ubblet-transfer/'+response.ubblet_transfer.id+'/voucher']);
			}
		});*/
		this.router.navigate(['panel/ubblet-transfer/1/voucher']);
	}

	total_amount(){
		this.totalAmount = this.ubbletTransfer.amount * 0.05 + this.ubbletTransfer.amount;
	}

	confirmation() {
		this.ubbletTransfer = this.form.value;
		this.name_wallet = this.walletService.getWallet(this.id).currency.name;
	}
	

}




