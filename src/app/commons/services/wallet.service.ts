import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { ApiAccessService } from '../../modules/api-access/api-access.service';
import { Constants } from "app/commons/constants/constants.service";

@Injectable()
export class WalletService {

	private module: string = "wallet";
	private url_base: string = "http://localhost:8000";

	constructor(private http: Http, public api: ApiAccessService) { }

	allByCurrentUser() {
		return [
			{
				"id": 1,
				"amount": Math.floor((Math.random() * 10) * 4300),
				"currency": {
					"id": 1,
					"name": "Dollar",
					"image": "assets/img/dollar4.png"
				}

			},
			{
				"id": 2,
				"amount": Math.floor((Math.random() * 10) * 5300),
				"currency": {
					"id": 2,
					"name": "Bolivares",
					"image": "assets/img/dollar4.png"
				}
			},
			{
				"id": 3,
				"amount": Math.floor((Math.random() * 10) * 2500),
				"currency": {
					"id": 3,
					"name": "Euro",
					"image": "assets/img/dollar4.png"
				}
			}
		]
		/*return this.http.get(this.url_base+'/user/wallet/')
			.map(res => res.json()
				.subscribe(response => {
			}))
			;*/
	}

	getByCurrentUser(id) {
		return {
			"id": id,
			"amount": Math.floor((Math.random() * id) * 2500),
			"currency": {
				"id": Math.floor((Math.random() * id) * 500),
				"name": "Euro",
				"image": "assets/img/dollar4.png"
			}
		}
		/*return this.http.get(Constants.API_URL+'/user/wallet/'+id)
			.map(res => res.json()
				.subscribe(response => {
			}))
			;*/
	}

	getWallets() {
		return this.http.get(this.api.createUrl(this.module))
			.map(res => res.json())
			.subscribe(response => {
			});
	}

	getWallet(id) {
		return {
			"id": 1,
			"amount": Math.floor((Math.random() * 10) * 4300),
			"currency": {
				"id": 1,
				"name": "Dollar",
				"image": "assets/img/dollar4.png"
			}

		}
		/*return this.http.get(this.getWalletUrl(id))
			.map(res => res.json().subscribe(response => {
			}))
			;*/
	}

	addWallet(wallet) {
		return this.http.post(this.api.createUrl(this.module), JSON.stringify(wallet))
			.map(res => res.json())
			.subscribe(response => {
			});
	}

	updateWallet(id, wallet) {
		return this.http.put(this.getWalletUrl(id), JSON.stringify(wallet))
			.map(res => res.json())
			.subscribe(response => {
			});
	}

	deleteWallet(id) {
		return this.http.delete(this.getWalletUrl(id))
			.map(res => res.json())
			.subscribe(response => {
			});
	}

	private getWalletUrl(id) {
		return this.api.createUrl(this.module) + "/" + id;
	}

}


