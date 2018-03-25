import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TransferService } from '../../../commons/services/transfer.service';
import { NavBarService } from '../../../commons/services/nav-bar.service';

export class Wb21InternationalTransfer{
	id: number;
	code: string;
	bankName: string;
}

@Component({
	selector: 'wb21-transfer-receipt',
	templateUrl: 'wb21-transfer-receipt.component.html'
})
export class Wb21TransferReceiptComponent implements OnInit {

	private code: number;
	private amount: number;
	private transfer: {};

	constructor(
		private transferService: TransferService,
		private router: Router,
    	private route: ActivatedRoute,
    	public  nav: NavBarService,
	) {}

	ngOnInit() {
		this.nav.clientMenu();
		this.route.params.subscribe((params: Params) => {
	        this.code = params['code'];
	        this.transferService.getTransfer( this.code )
      			.subscribe( data => {
      				let auxTransfer = data.transfer;
      				this.transfer = auxTransfer;
      				this.amount = parseInt(auxTransfer.amount) 
      							  + parseInt(auxTransfer.bankFee)
      							  + parseInt(auxTransfer.ubbletFee); 
      				return data.transfer;
      			});
	    });
	    console.log( this.transfer );
	}
}