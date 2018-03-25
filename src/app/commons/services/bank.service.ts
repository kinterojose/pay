import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { ApiAccessService } from '../../modules/api-access/api-access.service';

@Injectable()
export class BankService {

  private module: string = "bank";

  constructor(private http: Http, public api: ApiAccessService) { }

  getBanks() {
    return this.http.get(this.api.createUrl(this.module))
      .map(res => res.json());
  }

  getBank(id) {
    return this.http.get(this.getBankUrl(id))
      .map(res => res.json());
  }

  addBank(bank) {
    return this.http.post(this.api.createUrl(this.module), JSON.stringify(bank))
      .map(res => res.json());
  }

  updateBank(id, bank) {
    return this.http.put(this.getBankUrl(id), JSON.stringify(bank))
      .map(res => res.json());
  }

  deleteBank(id) {
    return this.http.delete(this.getBankUrl(id))
      .map(res => res.json());
  }

  private getBankUrl(id) {
    return this.api.createUrl(this.module) + "/" + id;
  }
}
