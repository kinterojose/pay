import { Component, OnInit } from '@angular/core';
import { NavBarService } from '../../commons/services/nav-bar.service';

declare var swal: any;

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  public imageDefault = "../../assets/img/default/default-camera.png";

  constructor( public nav: NavBarService ) { }

  ngOnInit() {
    this.nav.adminMenu();

  }

  deleteHelp(){
/*
    swal({
      title: 'Usted esta seguro?',
      text: "Eliminar la moneda " + currency.name + "?",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminarlo !'
    }).then(function (currency) {
      console.log("acepted button");
      swal(
        'No se pudo eliminar',
        'Intente más tarde',
        'warning'
      )
    }).catch(swal.noop);
*/

  }

}

