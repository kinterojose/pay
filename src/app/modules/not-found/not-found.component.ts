import { Component, OnInit } from '@angular/core';
import { NavBarService } from '../../commons/services/nav-bar.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor( public nav: NavBarService ) { }

  ngOnInit() {
	this.nav.notFoundMenu()
  }

}
