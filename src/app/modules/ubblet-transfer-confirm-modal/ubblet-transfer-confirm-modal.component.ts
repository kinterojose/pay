import {Component, OnInit, Input} from '@angular/core';
import { UbbletTransfer } from '../../commons/models/ubblet-transfer';
import { UbbletTransferComponent } from '../ubblet-transfer/ubblet-transfer.component';

@Component({
  selector: 'ubblet-transfer-confirm-modal',
  templateUrl: './ubblet-transfer-confirm-modal.component.html'
})
export class UbbletTransferConfirmModalComponent implements OnInit {

  @Input() ubbletTransfer: UbbletTransfer;
  @Input() name_wallet: string;
  
  constructor(public ubbletTransferComponent: UbbletTransferComponent,){
    
  }
  
  ngOnInit() {
  }

  confirm(){
    this.ubbletTransferComponent.save();
  }

}




