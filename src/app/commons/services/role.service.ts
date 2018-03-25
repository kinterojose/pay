import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { ApiAccessService } from '../../modules/api-access/api-access.service';

@Injectable()
export class RoleService {

	private module: string = "role";

	constructor(private http: Http, public api: ApiAccessService) { }

	getRoles() {
		return this.http.get(this.api.createUrl(this.module))
			.map(res => res.json());
	}

	getRole(id) {
		return this.http.get(this.getRoleUrl(id))
			.map(res => res.json());
	}

	addRole(role) {
		return this.http.post(this.api.createUrl(this.module), JSON.stringify(role))
			.map(res => res.json());
	}

	updateRole(id, role) {
		return this.http.put(this.getRoleUrl(id), JSON.stringify(role))
			.map(res => res.json());
	}

	deleteRole(id) {
		return this.http.delete(this.getRoleUrl(id))
			.map(res => res.json());
	}

	private getRoleUrl(id) {
		return this.api.createUrl(this.module) + "/" + id;
	}
}
