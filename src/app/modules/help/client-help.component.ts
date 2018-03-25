import { Component, OnInit } from '@angular/core';
import { NavBarService } from '../../commons/services/nav-bar.service';

declare var swal: any;

@Component({
  selector: 'app-client-help',
  templateUrl: './client-help.component.html'
})
export class ClientHelpComponent implements OnInit {

  public imageDefault = "../../assets/img/default/default-camera.png";

  constructor( public nav: NavBarService ) { }

  ngOnInit() {
    this.nav.clientMenu();
  }


}

