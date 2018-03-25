import { Component, OnInit } from '@angular/core';
import { TransferService } from "../../commons/services/transfer.service";
import { Transfer } from "../../commons/models/transfer";

declare var swal: any;

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  private transfers: Transfer[] = [];

  constructor(private transferService: TransferService) { }

  ngOnInit() {
    this.transferService.getTransfers()
      .subscribe(data => this.transfers = data.currencys);
  }

  deleteTransfer(transfer) {
    /*
        swal({
          title: 'Usted esta seguro?',
          text: "Eliminar la moneda " + transfer.name + "?",
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si, eliminarlo !'
        }).then(function (transfer) {
          console.log("acepted button");
          swal(
            'No se pudo eliminar',
            'Intente más tarde',
            'warning'
          )
        }).catch(swal.noop);
        if (confirm("Eliminar la moneda " + transfer.name + "?")) {
          var index = this.transfers.indexOf(transfer);
          this.transfers.splice(index, 1);
    
          this.transferService.deleteTransfer(transfer.id)
            .subscribe(null,
              err => {
                alert("No pudo eliminarse, intente mas tarde");
                // Revert the view back to its original state
                this.transfers.splice(index, 0, transfer);
              });
        }
    */

  }

}

