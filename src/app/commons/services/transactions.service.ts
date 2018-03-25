import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { ApiAccessService } from '../../modules/api-access/api-access.service';

@Injectable()
export class TransactionService {

	private module: string = "transaction";

	constructor(private http: Http, public api: ApiAccessService) { }

	getTransactions(id) {
		return this.http.get(this.api.createUrl(this.module))
			.map(res => res.json());
	}

	getTransaction(id) {
		return this.http.get(this.getTransactionUrl(id))
			.map(res => res.json());
	}

	addTransaction(transaction) {
		return this.http.post(this.api.createUrl(this.module), JSON.stringify(transaction))
			.map(res => res.json());
	}

	updateTransaction(transaction) {
		return this.http.put(this.getTransactionUrl(transaction.id), JSON.stringify(transaction))
			.map(res => res.json());
	}

	deleteTransaction(id) {
		return this.http.delete(this.getTransactionUrl(id))
			.map(res => res.json());
	}

	private getTransactionUrl(id) {
		return this.api.createUrl(this.module) + "/" + id;
	}
}
