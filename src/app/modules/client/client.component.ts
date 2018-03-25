import { Component, OnInit } from '@angular/core';
import { NavBarService } from '../../commons/services/nav-bar.service';

declare var swal: any;

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
	styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor( public nav: NavBarService ) { }

  ngOnInit() {
    this.nav.clientMenu();
  }


}

