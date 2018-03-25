import { Injectable } from '@angular/core';

@Injectable()
export class QueryStringService {

	private offset: number;
	private limit: number;
	private search: string;
	private searchField: string;
	private token: string;
	private fingerprint: string;
	
	constructor() {}

	setOffset( offset: number ): void{
		this.offset = offset;
	}

	getOffset(): number{
		return this.offset
	}

	setLimit( limit: number ): void{
		this.limit = limit;
	}

	getLimit(): number{
		return this.limit;
	}

	setToken( token: string ): void{
		this.token = token;
	}

	getToken(): string{
		return this.token;
	}

	setFingerprint( fingerprint: string): void{
		this.fingerprint = fingerprint;
	}

	getFingerprint(): string{
		return this.fingerprint;
	}

	getString(): string{
		let queryString: string;
		queryString = `?`;
		if( this.offset != undefined && this.limit != undefined )
			queryString += `offset=${this.offset}&limit=${this.limit}`;
		if( this.search != undefined ){
			queryString += `q=${this.search}&`;
			if( this.searchField != undefined )
				queryString += `field=${this.searchField}&`;
		}
		if( this.token != undefined )
			queryString += `token=${this.token}&`;
		if( this.fingerprint != undefined )
			queryString += `fingerprint=${this.fingerprint}&`;
		return queryString;
	}
}