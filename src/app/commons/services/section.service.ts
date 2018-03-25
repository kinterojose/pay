import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { ApiAccessService } from '../../modules/api-access/api-access.service';

@Injectable()
export class SectionService {

	private module: string = "section";

	constructor(private http: Http, public api: ApiAccessService) { }

	getSections() {
		return this.http.get(this.api.createUrl(this.module))
			.map(res => res.json());
	}

	getSection(id) {
		return this.http.get(this.getSectionUrl(id))
			.map(res => res.json());
	}

	addSection(section) {
		return this.http.post(this.api.createUrl(this.module), JSON.stringify(section))
			.map(res => res.json());
	}

	updateSection(id, section) {
		return this.http.put(this.getSectionUrl(id), JSON.stringify(section))
			.map(res => res.json());
	}

	deleteSection(id) {
		return this.http.delete(this.getSectionUrl(id))
			.map(res => res.json());
	}

	private getSectionUrl(id) {
		return this.api.createUrl(this.module) + "/" + id;
	}
}
