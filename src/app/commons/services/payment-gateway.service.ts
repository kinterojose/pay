import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { ApiAccessService } from '../../modules/api-access/api-access.service';

@Injectable()
export class PaymentGatewayService {

	private module: string = "payment";

	constructor(private http: Http, public api: ApiAccessService) { }

	getPaymentsGateways() {
		return this.http.get(this.api.createUrl(this.module))
			.map(res => res.json());
	}

	getPaymentGateway(id) {
		return this.http.get(this.getPaymentGatewayUrl(id))
			.map(res => res.json());
	}

	addPaymentGateway(paymentgateway) {
		return this.http.post(this.api.createUrl(this.module), JSON.stringify(paymentgateway))
			.map(res => res.json());
	}

	updatePaymentGateway(id, paymentgateway) {
		return this.http.put(this.getPaymentGatewayUrl(id), JSON.stringify(paymentgateway))
			.map(res => res.json());
	}

	deletePaymentGateway(id) {
		return this.http.delete(this.getPaymentGatewayUrl(id))
			.map(res => res.json());
	}

	private getPaymentGatewayUrl(id) {
		return this.api.createUrl(this.module) + "/" + id;
	}
}
