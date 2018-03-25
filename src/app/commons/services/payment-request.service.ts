import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { ApiAccessService } from '../../modules/api-access/api-access.service';
import { Constants } from "app/commons/constants/constants.service";

@Injectable()
export class PaymentRequestService {

	private module: string = "payment-request";
	private payment_request: Object;

	constructor(private http: Http, private api: ApiAccessService, private constants: Constants) {
	}

	getTransfers() {
		return this.http.get(this.api.createUrl(this.module))
			.map(res => res.json())
			.catch(this.handleError);
	}

	getTransfer(id) {
		return {
			payment_request: {
				"id": id,
				"code": Math.floor((Math.random() * 10) * 100000),
				"target_user": "joseph.huizi@gmail.com",
				"amount": id * 1500,
				"fee": (id * 1500) *0.05,
				"description": "deuda pendiente",
				"created_at": "2017-11-09",
				wallet: {
					"id": 5
				}
			}
		}
		/*return this.http.get('user/ubblet-transfer/' + id)
			.map(res => res.json())
			.catch(this.handleError);*/
	}

	addTransfer(transfer) {
		return {
			payment_request: {
				"id": 20,
				"target_user": "joseph.huizi@gmail.com",
				"amount": 2000,
				"description": "deuda pendiente",
				"created_at": "2017-11-09",
				wallet: {
					"id": 5
				}
			}
		}
		/*return this.http.post('user/ubblet-transfer', JSON.stringify(transfer))
			.map(res => res.json().subscribe(
					ubblet_transfer => {
						this.ubblet_transfer= ubblet_transfer;
					},
					error => console.error(error)
				)))
			.catch(this.handleError);*/
	}

	handleError(error: any, caught: Observable<any>) {
		return Observable.throw(error.json().error || 'Server errro');
	}

	updateTransfer(transfer) {
		return this.http.put(this.getTransferUrl(transfer.id), JSON.stringify(transfer))
			.map(res => res.json())
			.catch(this.handleError);
	}

	deleteCurrency(id) {
		return this.http.delete(this.getTransferUrl(id))
			.map(res => res.json())
			.catch(this.handleError);
	}

	private getTransferUrl(id) {
		return this.api.createUrl(this.module) + "/" + id;
	}
}
