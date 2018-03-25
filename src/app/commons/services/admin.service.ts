import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { ApiAccessService } from '../../modules/api-access/api-access.service';

@Injectable()
export class AdminService {

	private url: string = "http://jsonplaceholder.typicode.com/users";
	private module: string = "sign-up";

	constructor(private http: Http, public api: ApiAccessService) { }

	getAdmins() {
		return this.http.get(this.url)
			.map(res => res.json());
	}

	getAdmin(id) {
		return this.http.get(this.getAdminUrl(id))
			.map(res => res.json());
	}

	addAdmin(user) {
		return this.http.post(this.url, JSON.stringify(user))
			.map(res => res.json());
	}

	updateAdmin(user) {
		return this.http.put(this.getAdminUrl(user.id), JSON.stringify(user))
			.map(res => res.json());
	}

	deleteAdmin(id) {
		return this.http.delete(this.getAdminUrl(id))
			.map(res => res.json());
	}

	private getAdminUrl(id) {
		return this.url + "/" + id;
	}
}



