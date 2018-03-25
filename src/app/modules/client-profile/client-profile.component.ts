import { Component, OnInit } from '@angular/core';
import { NavBarService } from '../../commons/services/nav-bar.service';


declare var swal: any;

@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
	styleUrls: ['./client-profile.component.css']
})
export class ClientProfileComponent implements OnInit {

  constructor( public nav: NavBarService ) { }

  ngOnInit() {
    this.nav.clientMenu();
  }


}

