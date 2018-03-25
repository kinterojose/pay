import { Component, OnInit } from '@angular/core';
import { CurrencyService } from "../../commons/services/currency.service";
import { NavBarService } from '../../commons/services/nav-bar.service';
import { Currency } from "../../commons/models/currency";
import { DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';

declare var swal: any;

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

  private currencies: Currency[] = [];
  private showButton: any[];
  public imageDefault = "../../assets/img/default/default-camera.png";

  constructor(private currencyService: CurrencyService, private domSanitizer: DomSanitizer, public nav: NavBarService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.nav.adminMenu();

    let params: any = this.route.snapshot.params;

    this.currencies = this.currencyService.getCurrencies()
      /*.subscribe(data => this.currencies = data.currencies)*/;
  }

  display(index){
    console.log(index)
    this.showButton[index].show = true;
  }

  hidde(index){
    this.showButton[index].show = false;
  }

  deleteCurrency(currency) {
    var service = this.currencyService,
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
          // Revert the view back to its original state
          currencies.splice(index, 0, currency);
        });
      if (error) {
        swal(
          'Ups!',
          'Se presentó problemas para eliminar, intentelo más tarde',
          'warning'
        )
      } else {
        swal(
          'Eliminado!',
          'Exitosamente ',
          'success'
        )
      }
    }).catch(swal.noop);

  }

}

