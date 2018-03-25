import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class CurrencyService {

	//Object {name: "moneda", image: "la ruta del puto archivo"}
	private url: string = "http://localhost:8000/currency";
	/*
	  private headers = new Headers({
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	  });
	*/
	constructor(private http: Http) { }

	getCurrencies() {
		return this.http.get(this.url)
			.map(res => res.json());
	}

	getCurrency(id) {
		return this.http.get(this.getCurrencyUrl(id))
			.map(res => res.json());
	}

	addCurrency(currency) {
		return this.http.post(this.url, JSON.stringify(currency))
			.map(res => res.json());
	}

	updateCurrency(currency) {
		return this.http.put(this.getCurrencyUrl(currency.id), JSON.stringify(currency))
			.map(res => res.json());
	}

	deleteCurrency(id) {
		return this.http.delete(this.getCurrencyUrl(id))
			.map(res => res.json());
	}

	private getCurrencyUrl(id) {
		return this.url + "/" + id;
	}
}
