import { Component, OnInit } from '@angular/core';
import { NavBarService } from '../../commons/services/nav-bar.service';
import { DomSanitizer } from '@angular/platform-browser';

import { BasicValidators } from '../shared/basic-validators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Ng2DropdownModule } from 'ng2-material-dropdown';
import { Constants } from '../../commons/constants/constants.service';

import {CryptoService} from "../../commons/services/crypto.service";
import {CryptoTransferService} from "../../commons/services/crypto-transfer.service";
import {CryptoCurrency} from "../../commons/models/crypto-currency";

declare var swal: any;

@Component({
	selector: 'crypto-transfer',
	templateUrl: './crypto-transfer.component.html',
	styleUrls: ['./crypto-transfer.component.css']
})
export class CryptoTransferComponent implements OnInit {

	  public form: FormGroup;
    private cryptoCurrencies: CryptoCurrency[] = [];
    private cryptoCurrency: CryptoCurrency;
    private buttonText: string = "Criptomonedas";

  	constructor(
		private cryptoTransferService: CryptoTransferService,
		private domSanitizer: DomSanitizer,
		public nav: NavBarService,
		private router: Router,
		private cryptoService: CryptoService,
		formBuilder: FormBuilder
    ){
	  	this.form = formBuilder.group({
			amount: [
				'', 
				[
					Validators.required,
					Validators.minLength(10)
				]
			]
	    });
  	}

	ngOnInit() {
		this.nav.clientMenu();
		//this.form.value.amount = 0.0;
		this.cryptoService.all().subscribe( data => this.cryptoCurrencies = data.cryptos );
	}

  isEmptyObject(obj) {
    return (obj && (Object.keys(obj).length === 0));
  }

  save(){
    /*var result,
        router = this.router,
        currency = this.form.value,
        body = {
          "account":{
            "id" : this.account[0],
            "type": this.form.value.type[0]
          },
          "amount": this.amount,
          "bankFee": this.feeBank,
          "ubbletFee": this.feeUbblet,
          "user":{
              "id": 10,
          },
          "bank":{
              "id": this.bank[0]
          },
          "currency":{
              "id": this.currency[0]
          }
        };
//	console.log(body);

    result = this.transferService.addTrasnfer(body);
    result.subscribe(response =>  {
              if((response == 200) || (response.transfer.id > 0)){
                switch(response.transfer.bank.name){
                  case 'WB21':
                    this.router.navigate([`panel/transfer/${response.transfer.code}/wb21-receipt`]);
                  break;
                  default:
                    alert('El banco no es reconocido');
                  break;
                }
              }
              if(response.error == 400){
                  swal(
                    'Ocurrio un error',
                    'Inténtelo más tarde !',
                    'error'
                  )
              }
              if(response == 422){
                  swal(
                    'Verifique',
                    'Algunos de los datos, no son válidos',
                    'warning'
                  )
              }
    });*/
  }

  cryptoChange( event ): void{
    this.cryptoCurrency = this.cryptoCurrencies.find(CryptoCurrency => CryptoCurrency.id == event.target.id);
    this.buttonText     = this.cryptoCurrency.name;
  }
}


