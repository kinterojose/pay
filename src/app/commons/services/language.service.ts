import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { ApiAccessService } from '../../modules/api-access/api-access.service';

@Injectable()
export class LanguageService {

	private module: string = "language";

	constructor(private http: Http, public api: ApiAccessService) { }

	getLanguages() {
		return this.http.get(this.api.createUrl(this.module))
			.map(res => res.json());
	}

	getLanguage(id) {
		return this.http.get(this.getLanguageUrl(id))
			.map(res => res.json());
	}

	addLanguage(language) {
		return this.http.post(this.api.createUrl(this.module), JSON.stringify(language))
			.map(res => res.json());
	}

	updateLanguage(id, language) {
		return this.http.put(this.getLanguageUrl(id), JSON.stringify(language))
			.map(res => res.json());
	}

	deleteLanguage(id) {
		return this.http.delete(this.getLanguageUrl(id))
			.map(res => res.json());
	}

	private getLanguageUrl(id) {
		return this.api.createUrl(this.module) + "/" + id;
	}
}
