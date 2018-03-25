import { Component, OnInit } from '@angular/core';
import { BankService } from "../../commons/services/bank.service";
import { NavBarService } from '../../commons/services/nav-bar.service';
import { Bank } from "../../commons/models/bank";
import { DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';

declare var swal: any;

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {

  private banks: Bank[] = [];
  public imageDefault = "../../assets/img/default/default-paypal.png";

  constructor(private bankService: BankService, private domSanitizer: DomSanitizer,  public nav: NavBarService, private route: ActivatedRoute ) { }

  ngOnInit() {
    this.nav.adminMenu();

    let params:any = this.route.snapshot.params;
    console.log(params);
/*
    this.bankService.getBanks()
      .subscribe(data => this.banks = data.banks);
*/
  }

  deleteBank(bank){
    var service = this.bankService,
        banks = this.banks;

    swal({
      title: 'Esta Seguro',
      text: "Se eliminara \"(" + bank.name + ")\" permanentemente",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#0288d1',
      cancelButtonColor: '#cc0000',
      confirmButtonText: 'ELIMINAR',
      cancelButtonText: 'CANCELAR'
    }).then(function () {
      var index = banks.indexOf(bank),
          error = false;
      banks.splice(index, 1);

      service.deleteBank(bank.id)
      .subscribe(null,
      err => {
        error = true;
        // Revert the view back to its original state
        banks.splice(index, 0, bank);
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

}

