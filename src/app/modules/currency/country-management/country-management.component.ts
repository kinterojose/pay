import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';

import { Currency } from '../../../commons/models/currency';
import { CurrencyService } from '../../../commons/services/currency.service';
import { BasicValidators } from '../../shared/basic-validators';
import { NavBarService } from '../../../commons/services/nav-bar.service';
import { IMultiSelectOption, IMultiSelectTexts, IMultiSelectSettings } from 'angular-2-dropdown-multiselect';

declare var swal: any;

@Component({
  selector: 'app-country-management-currency',
  templateUrl: './country-management.component.html'
})
export class CountryManagementComponent implements OnInit {

  private currencies: Currency[] = [];
  public imageDefault = "../../assets/img/default/default-paypal.png";
  country: number[];

  // Settings configuration
  mySettings: IMultiSelectSettings = {
      enableSearch: true,
      checkedStyle: 'fontawesome',
      buttonClasses: 'btn btn-blue-d btn-block',
      dynamicTitleMaxItems: 2,
      displayAllSelectedText: true,
      maxHeight: "250px"
  };

  // Text configuration
  myTexts: IMultiSelectTexts = {
      checkAll: 'Seleccionar todo',
      uncheckAll: 'Deselecciona todo',
      checked: 'Elemento seleccionado',
      checkedPlural: 'Opciones seleccionadas',
      searchPlaceholder: 'Encontrar',
      defaultTitle: 'Selecionar',
      allSelected: 'Todos seleccionados',
  };

  // Labels / Parents
  myOptions: IMultiSelectOption[] = [
      { id: 1, name: 'Paises', isLabel: true },
      { id: 2, name: 'Brasil', parentId: 1 },
      { id: 3, name: 'Chile', parentId: 1 },
      { id: 4, name: 'Colombia', parentId: 1 },
      { id: 6, name: 'Guatemala', parentId: 1 },
      { id: 7, name: 'Paraguay', parentId: 1 },
      { id: 8, name: 'Panamá', parentId: 1 }
  ];

  constructor(private currencyService: CurrencyService, private domSanitizer: DomSanitizer,  public nav: NavBarService, private route: ActivatedRoute ) { }

  ngOnInit() {
    this.nav.adminMenu();

    this.currencyService.getCurrencies()
      /*.subscribe(data => this.currencies = data.currencies)*/;
  }

  deleteCountry(currency){
    var service = this.currencyService,
        currencies = this.currencies;

    swal({
      title: 'Esta Seguro',
      text: "Se eliminara \"(" + "example country" + ")\" permanentemente",
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

  onChange() {
    console.log(this.country);
  }

  addCountry(){
    swal(
      'Agregado Exitosamente',
      'Los paises 1,2,3',
      'success'
    )        
  }

}

