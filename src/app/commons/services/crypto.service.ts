import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { ApiAccessService } from '../../modules/api-access/api-access.service';

@Injectable()
export class CryptoService {

  private module: string = "crypto";

  constructor(private http: Http, public api: ApiAccessService) { }

  all() {
	return this.http.get(this.api.createUrl(this.module))
	  .map(res => res.json());
  }

  getCurrency(id) {
	return this.http.get(this.getCurrencyUrl(id))
	  .map(res => res.json());
  }

  addCurrency(currency) {
	return this.http.post(this.api.createUrl(this.module), JSON.stringify(currency))
	  .map(res => res.json());
  }

  updateCurrency(id, currency) {
	return this.http.put(this.getCurrencyUrl(id), JSON.stringify(currency))
	  .map(res => res.json());
  }

  deleteCurrency(id) {
	return this.http.delete(this.getCurrencyUrl(id))
	  .map(res => res.json());
  }

  private getCurrencyUrl(id) {
	return this.api.createUrl(this.module) + "/" + id;
  }

  getByCurrency(idCurrency) {
	return this.http.get(this.getCurrencyUrl(idCurrency) + "/bank")
	  .map(res => res.json());
  }

  getAccount(idCurrency, idBank) {
	return this.http.get(this.getCurrencyUrl(idCurrency) + "/bank/" + idBank + "/account")
	  .map(res => res.json());
  }

}


