import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class SectionService {

	//Object {name: "moneda", image: "la ruta del puto archivo"}
	private url: string = "http://localhost:8000/section";

	private headers = new Headers({
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	});

	constructor(private http: Http) { }

	getSections() {
		return this.http.get(this.url)
			.map(res => res.json());
	}

	getSection(id) {
		return this.http.get(this.getSectionUrl(id))
			.map(res => res.json());
	}

	addSection(section) {
		console.log(section);
		console.log(JSON.stringify(section));

		return this.http.post(this.url, JSON.stringify(section), { headers: this.headers })
			.map(res => res.json());
	}

	updateSection(section) {
		return this.http.put(this.getSectionUrl(section.id), JSON.stringify(section), { headers: this.headers })
			.map(res => res.json());
	}

	deleteSection(id) {
		return this.http.delete(this.getSectionUrl(id), { headers: this.headers })
			.map(res => res.json());
	}

	private getSectionUrl(id) {
		return this.url + "/" + id;
	}
}
