import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { ApiAccessService } from '../../modules/api-access/api-access.service';
import { User } from '../models/user';
import { QueryStringService } from './query-string.service';
import { Constants } from '../../commons/constants/constants.service';

@Injectable()
export class SignService {

	private module: string = "sign";

	constructor(private http: Http, public api: ApiAccessService) { }

	in(user: User) {
		let headers = new Headers();
		let data = JSON.stringify({});
		headers.append("Authorization", "Basic " + btoa(user.email + ":" + user.password));
		headers.append("Access-Control-Allow-Headers", "Content-Type");
		headers.append("Access-Control-Allow-Methods", "POST");
		headers.append("Access-Control-Allow-Origin", "*");
		let options = new RequestOptions({ headers: headers });
		return this.http.post(Constants.API_URL + '/PayService/pay/sign/',options)
			.map(res => res.json());
	}

	out(queryString: QueryStringService) {
		let url = this.api.createUrl(this.module) + queryString.getString();
		return this.http.delete(url)
			.map(res => res.json());
	}
}