import { Component, OnInit } from '@angular/core';
import { BalanceService } from "../../commons/services/balance.service";
import { NavBarService } from "../../commons/services/nav-bar.service";
import { Balance } from "../../commons/models/balance";
import { DomSanitizer } from '@angular/platform-browser';

import { BasicValidators } from '../shared/basic-validators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { IMultiSelectOption, IMultiSelectTexts, IMultiSelectSettings } from 'angular-2-dropdown-multiselect';
import { Constants } from '../../commons/constants/constants.service';

import { CurrencyService } from "../../commons/services/currency.service";
import { TransferService } from "../../commons/services/transfer.service";

declare var swal: any;

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {

  private balanceSheets: Balance[] = [];
  private imageDefault = "../../assets/img/default/default-paypal.png";
  public imagePrevisual = this.imageDefault;
  form: FormGroup;
  currency: number[];
  bank: number[];
  type: any[];
  amount: number = 0;
  feeBank: number = 0;
  feeUbblet: number = 0;
  totalAmount: number = 0;
  account: number = 0;

  currencyList: object = [];
  accountListL: object = [];
  accountListI: object = [];
  bankList: object = [{ id: 0, name: 'seleccione moneda' }];

  settings: IMultiSelectSettings = {
    checkedStyle: 'fontawesome',
    buttonClasses: 'btn btn-blue-d btn-block',
    maxHeight: "250px",
    selectionLimit: 1,
    autoUnselect: true,
    dynamicTitleMaxItems: 1
  };

  text: IMultiSelectTexts = {
    checkAll: 'Seleccionar todo',
    uncheckAll: 'Deselecciona todo',
    checked: 'Elemento seleccionado',
    checkedPlural: 'Opciones seleccionadas',
    searchPlaceholder: 'Encontrar',
    defaultTitle: 'Selecionar',
    allSelected: 'Todos seleccionados'
  };

  typeList: IMultiSelectOption[] = [
    { id: "i", name: 'Internacional' },
    { id: "l", name: 'Mismo banco' }
  ];

  constructor(
    private balanceService: BalanceService,
    private domSanitizer: DomSanitizer,
    public nav: NavBarService,
    private router: Router,
    private currencyService: CurrencyService,
    private transferService: TransferService,
    formBuilder: FormBuilder
  ) {
    this.form = formBuilder.group({
      amount: ['', [
        Validators.required,
        Validators.minLength(10)
      ]],
      currency: [''],
      bank: [''],
      type: [''],
      accountI: [''],
      accountL: ['']
    });
  }

  ngOnInit() {
    this.nav.clientMenu();
    this.form.value.amount = 0.0;

    this.currencyService.getCurrencies()
      /*.subscribe(data => this.currencyList = data.currencies)*/;
  }

  changeBank(val) {
    this.isEmptyObject(this.bankList);
    if (val != undefined) {
      this.currencyService.getByCurrency(val)
        .subscribe(data => this.bankList = data.banks);
    }
  }

  changeType(type) {
    if ((this.currency != undefined) && (this.bank != undefined)) {
      if (type == "i") {
        this.currencyService.getAccount(this.currency, this.bank)
          .subscribe(
          data => {
            if (!this.isEmptyObject(data.internationalAccounts)) {
              this.accountListI = [{ id: data.internationalAccounts[0].id, name: data.internationalAccounts[0].bankName, fee: data.internationalAccounts[0].fee }];
            } else {
              this.accountListI = [];
            }
          }
          );
      } else if (type == "l") {
        this.currencyService.getAccount(this.currency, this.bank)
          .subscribe(
          data => {
            if (!this.isEmptyObject(data.localAccounts)) {
              this.accountListL = [{ id: data.localAccounts[0].id, name: data.localAccounts[0].number }];
            } else {
              this.accountListL = [];
            }
          }
          );
      }
    }
  }

  isEmptyObject(obj) {
    return (obj && (Object.keys(obj).length === 0));
  }

  changeAcount(id) {
    this.changeAmount(this.amount);
    this.account = id;
  }

  changeAmount(amount) {
    var calcBank: number = 0;
    var calcUbbl: number = 2;

    if (this.form.value.type == "i") {
      if (!this.isEmptyObject(this.accountListI)) {

        calcBank = this.accountListI[0].fee;

      }

    } else if (this.form.value.type == "l") {

      calcBank = 0;

    }

    this.feeBank = (calcBank * amount) / 100;
    this.feeUbblet = (calcUbbl * amount) / 100;
    this.totalAmount = amount + this.feeBank + this.feeUbblet;
  }

  save() {
    var result,
      router = this.router,
      currency = this.form.value,
      body = {
        "account": {
          "id": this.account[0],
          "type": this.form.value.type[0]
        },
        "amount": this.amount,
        "bankFee": this.feeBank,
        "ubbletFee": this.feeUbblet,
        "user": {
          "id": 10,
        },
        "bank": {
          "id": this.bank[0]
        },
        "currency": {
          "id": this.currency[0]
        }
      };
    //	console.log(body);

    result = this.transferService.addTrasnfer(body);
    result.subscribe(response => {
      if ((response == 200) || (response.transfer.id > 0)) {
        switch (response.transfer.bank.name) {
          case 'WB21':
            this.router.navigate([`panel/transfer/${response.transfer.code}/wb21-receipt`]);
            break;
          default:
            alert('El banco no es reconocido');
            break;
        }
      }
      if (response.error == 400) {
        swal(
          'Ocurrio un error',
          'Inténtelo más tarde !',
          'error'
        )
      }
      if (response == 422) {
        swal(
          'Verifique',
          'Algunos de los datos, no son válidos',
          'warning'
        )
      }
    });
  }
}


