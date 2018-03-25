import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { ApiAccessService } from '../../modules/api-access/api-access.service';

@Injectable()
export class AccountService {

	private module: string = "account";

	constructor(private http: Http, public api: ApiAccessService) { }

	getAccounts() {
		return this.http.get(this.api.createUrl(this.module))
			.map(res => res.json());
	}

	getAccount(id) {
		return this.http.get(this.getAccountUrl(id))
			.map(res => res.json());
	}

	addAccount(account) {
		return this.http.post(this.api.createUrl(this.module), JSON.stringify(account))
			.map(res => res.json());
	}

	updateAccount(id, account) {
		return this.http.put(this.getAccountUrl(id), JSON.stringify(account))
			.map(res => res.json());
	}

	deleteAccount(id) {
		return this.http.delete(this.getAccountUrl(id))
			.map(res => res.json());
	}

	private getAccountUrl(id) {
		return this.api.createUrl(this.module) + "/" + id;
	}
}
