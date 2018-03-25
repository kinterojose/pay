import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { ApiAccessService } from '../../modules/api-access/api-access.service';
import { QueryStringService } from './query-string.service';
import { Constants } from '../../commons/constants/constants.service';

@Injectable()
export class SignUpService {

	private module: string = "sign-up";

	constructor(private http: Http, public api: ApiAccessService) { }

	getSignUp(id) {
		return this.http.get(this.getSignUpUrl(id))
			.map(res => res.json());
	}

	addSignUp(signup) {
		return this.http.post(this.api.createUrl(this.module), JSON.stringify(signup))
			.map(res => res.json());
	}

	updateSignUp(id, signup) {
		return this.http.put(this.getSignUpUrl(id), JSON.stringify(signup))
			.map(res => res.json());
	}

	deleteSignUp(id) {
		return this.http.delete(this.getSignUpUrl(id))
			.map(res => res.json());
	}

	private getSignUpUrl(id) {
		return this.api.createUrl(this.module) + "/" + id;
	}
}
