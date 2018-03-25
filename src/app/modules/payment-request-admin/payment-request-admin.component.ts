import { Component, OnInit } from '@angular/core';
import { PaymentRequestAdminService } from "../../commons/services/payment-request-admin.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavBarService } from '../../commons/services/nav-bar.service';
import { PaymentRequestAdmin } from "../../commons/models/payment-request-admin";
import { DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';

declare var swal: any;

@Component({
  selector: 'app-payment-request-admin',
  templateUrl: './payment-request-admin.component.html',
  styleUrls: ['./payment-request-admin.component.css']
})

   
export class PaymentRequestAdminComponent implements OnInit {

  private paymentRequet: PaymentRequestAdmin[] = [];
  private showButton: any[];
  public imageDefault = "../../assets/img/default/default-camera.png";

  constructor(private paymentService: PaymentRequestAdminService, private domSanitizer: DomSanitizer, public nav: NavBarService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.nav.adminMenu();
    let params: any = this.route.snapshot.params;
    this.paymentRequet = this.paymentService.getTransfers();
    var date = Date.now();
    
  }

  filter(filter) {
    this.paymentRequet = this.paymentRequet.filter(item => item.created_at.indexOf(filter) !== -1);
  }

  display(index){
    console.log(index)
    this.showButton[index].show = true;
  }

  hidde(index){
    this.showButton[index].show = false;
  }

  delete(transfer) {
    var service = this.paymentService,
    paymentRequet = this.paymentRequet;

    swal({
      title: 'Esta Seguro',
      text: "Se eliminara \"(" + transfer.code + ")\" permanentemente",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#0288d1',
      cancelButtonColor: '#cc0000',
      confirmButtonText: 'ELIMINAR',
      cancelButtonText: 'CANCELAR'
    }).then(function () {
      var index = paymentRequet.indexOf(transfer),
        error = false;
        paymentRequet.splice(index, 1);

      service.delete(transfer.id)
        .subscribe(null,
        err => {
          error = true;
          // Revert the view back to its original state
          paymentRequet.splice(index, 0, transfer);
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

