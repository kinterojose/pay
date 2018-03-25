import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { ApiAccessService } from '../../modules/api-access/api-access.service';

@Injectable()
export class BalanceService {

	private module: string = "transaction";

	constructor(private http: Http, public api: ApiAccessService) { }

	getBalanceSheets() {
		return this.http.get(this.api.createUrl(this.module))
			.map(res => res.json());
	}

	getBalance(id) {
		return this.http.get(this.getBalanceUrl(id))
			.map(res => res.json());
	}

	addBalance(balance) {
		return this.http.post(this.api.createUrl(this.module), JSON.stringify(balance))
			.map(res => res.json());
	}

	updateBalance(id, balance) {
		return this.http.put(this.getBalanceUrl(id), JSON.stringify(balance))
			.map(res => res.json());
	}

	deleteBalance(id) {
		return this.http.delete(this.getBalanceUrl(id))
			.map(res => res.json());
	}

	private getBalanceUrl(id) {
		return this.api.createUrl(this.module) + "/" + id;
	}
}
