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
  selector: 'app-country-add',
  templateUrl: 'country-add.component.html'
})

export class CountryAddComponent implements OnInit {

	private currencies: Currency[] = [];
	public imageDefault = "../../assets/img/default/default-paypal.png";
	optionsModel: number[];

	// Settings configuration
	mySettings: IMultiSelectSettings = {
	    enableSearch: true,
	    checkedStyle: 'fontawesome',
	    buttonClasses: 'btn btn-blue-d btn-block mx-1 my-1',
	    dynamicTitleMaxItems: 2,
	    displayAllSelectedText: true
	};

	// Text configuration
	myTexts: IMultiSelectTexts = {
	    checkAll: 'Seleccionar todo',
	    uncheckAll: 'Deselecciona todo',
	    checked: 'Elemento seleccionado',
	    checkedPlural: 'Opciones seleccionados',
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
	    { id: 9, name: 'Panamá', parentId: 1 },
	    { id: 10, name: 'Panamá 1', parentId: 1 },
	    { id: 11, name: 'Panamá 2', parentId: 1 },
	    { id: 12, name: 'Panamá 3', parentId: 1 },
	    { id: 13, name: 'Panamá 4', parentId: 1 },
	    { id: 14, name: 'Panamá 5', parentId: 1 },
	    { id: 15, name: 'Panamá 6', parentId: 1 },
	    { id: 16, name: 'Panamá 7', parentId: 1 }
	];

	constructor(private currencyService: CurrencyService, private domSanitizer: DomSanitizer,  public nav: NavBarService, private route: ActivatedRoute ) { }

	ngOnInit() {
		console.log(this.route.params['id']);
		console.log(this.route.params);

		this.nav.adminMenu();
	}

	onChange() {
		console.log(this.optionsModel);
	}


}

