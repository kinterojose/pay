import { Component, OnInit } from '@angular/core';
import { NavBarService } from '../../commons/services/nav-bar.service';

declare var swal: any;

@Component({
  selector: 'app-admin-help',
  templateUrl: './admin-help.component.html'
})
export class AdminHelpComponent implements OnInit {

  public imageDefault = "../../assets/img/default/default-camera.png";

  constructor( public nav: NavBarService ) { }

  ngOnInit() {
    this.nav.adminMenu();
  }


}
