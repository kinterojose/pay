import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { ApiAccessService } from '../../modules/api-access/api-access.service';

@Injectable()
export class PaymentRequestAdminService {

	private module: string = "payment-request-admin";
	private transfer: Object;

	constructor(private http: Http, public api: ApiAccessService) { }

	getTransfers() {
		return [
			{
				"id": 1,
				"code": Math.floor((Math.random() * 10) * 100000),
				"description": "TEST",
				"user_origin": "MANUEL",
				"user_destination": "JESUS",
				"amount": 320,
				"created_at": "2017/12/05",
				/*wallet: {
					"id": 5
				}*/

			},
			{
				"id": 2,
				"code": Math.floor((Math.random() * 10) * 100000),
				"description": "TEST",
				"user_origin": "JESUS",
				"user_destination": "MANUEL",
				"amount": 150,
				"created_at": "2017-12-07",
				/*wallet: {
					"id": 1
				}*/
			},
			{
				"id": 3,
				"code": Math.floor((Math.random() * 10) * 100000),
				"description": "TEST",
				"user_origin": "JESUS",
				"user_destination": "DIEGO",
				"amount": 520,
				"created_at": "2017/11/11",
				/*wallet: {
					"id": 2
				}*/
			},
			{
				"id": 4,
				"code": Math.floor((Math.random() * 10) * 100000),
				"description": "TEST",
				"user_origin": "DIEGO",
				"user_destination": "JESUS",
				"amount": 480,
				"created_at": "2017-12-07",
				/*wallet: {
					"id": 3
				}*/
			}
		]
	}

	getTransfer(id) {
		return this.http.get(this.getTransferUrl(id))
			.map(res => res.json());
	}

	create(transfer) {
		return this.http.post(this.api.createUrl(this.module), JSON.stringify(transfer))
			.map(res => res.json());
	}

	update(id, transfer) {
		return this.http.put(this.getTransferUrl(id), JSON.stringify(transfer))
			.map(res => res.json());
	}

	delete(id) {
		return this.http.delete(this.getTransferUrl(id))
			.map(res => res.json());
	}

	private getTransferUrl(id) {
		return this.api.createUrl(this.module) + "/" + id;
	}

	getByTransfer(idTransfer) {
		return this.http.get(this.getTransferUrl(idTransfer) + "/bank")
			.map(res => res.json());
	}

	getAccount(idTransfer, idBank) {
		return this.http.get(this.getTransferUrl(idTransfer) + "/bank/" + idBank + "/account")
			.map(res => res.json());
	}

}


