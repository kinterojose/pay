import { Component, OnInit } from '@angular/core';
import { UbbletTransferAdminService } from "../../commons/services/ubblet-transfer-admin.service";
import { NavBarService } from '../../commons/services/nav-bar.service';
import { UbbletTansferAdmin } from "../../commons/models/ubblet-transfer-admin";
import { DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';

declare var swal: any;

@Component({
  selector: 'app-ubblet-transfer-admin',
  templateUrl: './ubblet-transfer-admin.component.html',
  styleUrls: ['./ubblet-transfer-admin.component.css']
})
export class UbbletTransferAdminComponent implements OnInit {

  private ubbletTransfer: UbbletTansferAdmin[] = [];
  private showButton: any[];
  public imageDefault = "../../assets/img/default/default-camera.png";

  constructor(private transferService: UbbletTransferAdminService, private domSanitizer: DomSanitizer, public nav: NavBarService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.nav.adminMenu();

    let params: any = this.route.snapshot.params;

    this.ubbletTransfer = this.transferService.getTransfers();
      /*.subscribe(data => this.currencies = data.currencies)*/;
  }

  display(index){
    console.log(index)
    this.showButton[index].show = true;
  }

  hidde(index){
    this.showButton[index].show = false;
  }

  delete(transfer) {
    var service = this.transferService,
    ubbletTransfer = this.ubbletTransfer;

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
      var index = ubbletTransfer.indexOf(transfer),
        error = false;
      ubbletTransfer.splice(index, 1);

      service.delete(transfer.id)
        .subscribe(null,
        err => {
          error = true;
          // Revert the view back to its original state
          ubbletTransfer.splice(index, 0, transfer);
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

