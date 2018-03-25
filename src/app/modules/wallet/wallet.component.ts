import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';

import { Constants } from '../../commons/constants/constants.service';
import { NavBarService } from '../../commons/services/nav-bar.service';
import { WalletService } from "../../commons/services/wallet.service";
import { Wallet } from "../../commons/models/wallet";
import { CurrencyService } from "../../commons/services/currency.service";

declare var swal: any;

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html'
})
export class WalletComponent implements OnInit {

  private wallets: Wallet[] = [];
  public imageDefault = "../../assets/img/default/default-camera.png";

  constructor(private walletService: WalletService, private domSanitizer: DomSanitizer,  public nav: NavBarService, private route: ActivatedRoute ) { }

  ngOnInit() {
    this.nav.clientMenu();

    let params:any = this.route.snapshot.params;
/*
    this.walletService.getWallets()
      .subscribe(data => this.wallets = data.wallets);
*/
  }
/*
  deleteCurrency(currency){
    var service = this.walletService,
        currencies = this.currencies;

    swal({
      title: 'Esta Seguro',
      text: "Se eliminara \"(" + currency.name + ")\" permanentemente",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#0288d1',
      cancelButtonColor: '#cc0000',
      confirmButtonText: 'ELIMINAR',
      cancelButtonText: 'CANCELAR'
    }).then(function () {
      var index = currencies.indexOf(currency),
          error = false;
      currencies.splice(index, 1);

      service.deleteCurrency(currency.id)
      .subscribe(null,
      err => {
        error = true;
        currencies.splice(index, 0, currency);
      });
      if(error){
        swal(
          'Ups!',
          'Se presentó problemas para eliminar, intentelo más tarde',
          'warning'
        )
      }else{
        swal(
          'Eliminado!',
          'Exitosamente ',
          'success'
        )        
      }
    }).catch(swal.noop);
  }
*/

}

