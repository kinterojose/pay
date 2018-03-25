import { Component, OnInit } from '@angular/core';
import { NavBarService } from './commons/services/nav-bar.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	title = 'UbbletPay';

	constructor(public nav: NavBarService, private translate: TranslateService) {

		translate.addLangs(["en", "es"]);
		translate.setDefaultLang('es');

		let browserLang = translate.getBrowserLang();
		translate.use(browserLang.match(/en|es/) ? browserLang : 'es');
	}

	ngOnInit() {
		this.nav.classHeader = "intro-home";
	}

	changeLanguage(lang){
        this.translate.use(lang);
    }

}
