import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
/**Para posibles configuraciones del header**/
//http://localhost:8000/currency?page=2&perpage=2


@Injectable()

export class ApiAccessService {

  private urlBase: string = "http://localhost:8000";
  private headers: any;

  constructor() { }

	public createUrl(moduleString="", params=""){
	return this.urlBase + "/" + moduleString + params;
	}

	public handleError(error) {
	    console.error(error);

	    // The following doesn't work.
	    // There's no error status at least in case of network errors.
	    // WHY?!
	    //
	    // if ( error === undefined) error = null;
	    // let errMsg = (error && error.message)
	    //     ? error.message
	    //     : (error && error.status)
	    //         ? `${error.status} - ${error.statusText}`
	    //         : error;
	    //
	    // return Observable.throw(errMsg);
	}

}
