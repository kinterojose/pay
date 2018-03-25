import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavBarService } from '../../commons/services/nav-bar.service';
import { AppComponent } from '../../app.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
})
export class NavBarComponent implements OnInit {

  show_admin: boolean = true;
  show_user: boolean = true;
  show_balance: boolean = true;
  
  constructor(
    private translate: TranslateService,
    public appComponent: AppComponent, 
    public nav: NavBarService,
    public router: Router
  )
  { 
  }

	ngOnInit() {
  	
  }

  changeLanguage(lang){
    this.translate.use(lang);
  }

}





