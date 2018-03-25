import { Injectable } from '@angular/core';
import { Location } from '@angular/common';

@Injectable()
export class NavBarService {
	visible: boolean;
	menuAdmin: boolean;
	menuClient: boolean;
	menuRight: boolean;
	homeContent: boolean;
	registerContent: boolean;
	notFoundContent: boolean;
	classHeader: string;
	classContainer: string;

	constructor(private location: Location) {
		this.visible = false;
		this.menuAdmin = false;
		this.menuClient = false;
		this.menuRight = false;
		this.homeContent = false;
		this.registerContent = false;
		this.notFoundContent = false;
		this.classHeader = "";
		this.classContainer = "";
	}

	hideVisible() { this.visible = false; }
	showVisible() { this.visible = true; }
	toggleVisible() { this.visible = !this.visible; }

	hideMenuAdmin() { this.menuAdmin = false; }
	showMenuAdmin() { this.menuAdmin = true; }
	toggleMenuAdmin() { this.menuAdmin = !this.menuAdmin; }

	hideMenuClient() { this.menuClient = false; }
	showMenuClient() { this.menuClient = true; }
	toggleMenuClient() { this.menuClient = !this.menuClient; }

	hideMenuRight() { this.menuRight = false; }
	showMenuRight() { this.menuRight = true; }
	toggleMenuRight() { this.menuRight = !this.menuRight; }

	hideHomeContent() { this.homeContent = false; }
	showHomeContent() { this.homeContent = true; }
	toggleHomeContent() { this.homeContent = !this.homeContent; }

	hideRegisterContent() { this.registerContent = false; }
	showRegisterContent() { this.registerContent = true; }
	toggleRegisterContent() { this.registerContent = !this.registerContent; }

	hideNotFoundContent() { this.notFoundContent = false; }
	showNotFoundContent() { this.notFoundContent = true; }
	toggleNotFoundContent() { this.notFoundContent = !this.notFoundContent; }

	homeMenu() {
		this.showVisible();
		this.hideMenuAdmin();
		this.hideMenuClient();
		this.hideMenuRight();
		this.showHomeContent();
		this.hideRegisterContent();
		this.hideNotFoundContent();
		this.classHeader = "intro-home";
		this.classContainer = "no-pad-lf";
	}

	registreMenu() {
		this.showVisible();
		this.hideMenuAdmin();
		this.hideMenuClient();
		this.hideMenuRight();
		this.hideHomeContent();
		this.showRegisterContent();
		this.hideNotFoundContent();
		this.classHeader = "intro-home";
		this.classContainer = "";
	}

	adminMenu() {
		this.showVisible();
		this.showMenuAdmin();
		this.hideMenuClient();
		this.showMenuRight();
		this.hideHomeContent();
		this.hideRegisterContent();
		this.hideNotFoundContent();
		this.classHeader = "";
		this.classContainer = "";
	}

	clientMenu() {
		this.showVisible();
		this.hideMenuAdmin();
		this.showMenuClient();
		this.showMenuRight();
		this.hideHomeContent();
		this.hideRegisterContent();
		this.hideNotFoundContent();
		this.classHeader = "";
		this.classContainer = "";
	}

	clientLogin() {
		this.hideVisible();
		this.hideMenuAdmin();
		this.hideMenuClient();
		this.hideMenuRight();
		this.hideHomeContent();
		this.hideRegisterContent();
		this.hideNotFoundContent();
		this.classHeader = "";
		this.classContainer = "no-pad-lf";
	}

	notFoundMenu() {
		this.showVisible();
		this.hideMenuAdmin();
		this.hideMenuClient();
		this.showMenuRight();
		this.hideHomeContent();
		this.hideRegisterContent();
		this.showNotFoundContent();
		this.classHeader = "";
		this.classContainer = "";
	}

	returnBack() {
		this.location.back();
	}


}






