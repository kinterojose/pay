import { Injectable } from '@angular/core';

@Injectable()
export class AuthStorageService {

	constructor() { }

	setToken(token: string): void {
		localStorage.setItem('usr_tok', token);
	}

	setUser(user): void {
		localStorage.setItem('usr_inf', JSON.stringify(user));
	}

	getToken(): string {
		return localStorage.getItem('usr_tok');
	}

	getUser() {
		return JSON.parse(localStorage.getItem('usr_inf'));
	}

	isToken(): boolean {
		if (localStorage.getItem('usr_tok'))
			return true;
		else
			return false;
	}
}