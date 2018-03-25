import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { ApiAccessService } from '../../modules/api-access/api-access.service';
import { Constants } from '../../commons/constants/constants.service';

@Injectable()
export class UserService {
	
	private module: string = "user";
	private user: Object;

	constructor(private http: Http, public api: ApiAccessService) { }

	gets() {
		return this.http.get(this.api.createUrl(this.module))
			.map(res => res.json())
			.catch(this.handleError);
	}
	
	getId(id) {
		return {
			user: {
				"id": id,
				"username": "joseph.huizi",
				"firstname": "joseph",
				"lastname": "huizi",
				"password": "01joseph01"
			}
		}
	}

	create(data) {
		return {
			user: {
				"username": data.user.username,
				"firstname": data.user.firstname,
				"lastname": data.user.lastname,
				"password": data.user.password
			}
		}
	}

	update(data) {
		return this.http.put(this.getUserUrl(data.id), JSON.stringify(data))
			.map(res => res.json())
			.catch(this.handleError);
	}

	delete(id) {
		return this.http.delete(this.getUserUrl(id))
			.map(res => res.json())
			.catch(this.handleError);
	}

	handleError(error: any, caught: Observable<any>) {
		return Observable.throw(error.json().error || 'Server errro');
	}

	private getUserUrl(id) {
		return this.api.createUrl(this.module) + "/" + id;
	}


}



