import {Component, OnInit, Input} from '@angular/core';
import { PaymentRequest } from '../../commons/models/payment-request';
import { PaymentRequestComponent } from '../payment-request/payment-request.component';
import { Wallet } from '../../commons/models/wallet';

@Component({
  selector: 'payment-request-confirm-modal',
  templateUrl: './payment-request-confirm-modal.component.html'
})
export class PaymentRequestConfirmModalComponent implements OnInit {

  @Input() paymentRequest: PaymentRequest;
  @Input() name_wallet: string;
  
  constructor(public paymentRequestComponent: PaymentRequestComponent,){
    
  }
  
  ngOnInit() {
  }

  confirm(){
    this.paymentRequestComponent.save();
  }

}




