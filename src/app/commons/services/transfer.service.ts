import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { ApiAccessService } from '../../modules/api-access/api-access.service';

@Injectable()
export class TransferService {

	private module: string = "transfer";

	constructor(private http: Http, public api: ApiAccessService) { }

	getTransfers() {
		return this.http.get(this.api.createUrl(this.module))
			.map(res => res.json());
	}

	getTransfer(code) {
		return this.http.get(this.getTransferUrl(code))
			.map(res => res.json());
	}

	addTrasnfer(transfer) {
		return this.http.post(this.api.createUrl(this.module), JSON.stringify(transfer))
			.map(res => res.json());
	}

	updateTransfer(transfer) {
		return this.http.put(this.getTransferUrl(transfer.id), JSON.stringify(transfer))
			.map(res => res.json());
	}

	deleteCurrency(id) {
		return this.http.delete(this.getTransferUrl(id))
			.map(res => res.json());
	}

	private getTransferUrl(id) {
		return this.api.createUrl(this.module) + "/" + id;
	}
}
