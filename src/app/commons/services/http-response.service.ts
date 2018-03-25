import { Injectable } from '@angular/core';

@Injectable()
export class HttpResponseService {
	public static BAD_REQUEST          = 400;
	public static UNAUTHORIZED         = 401;
	public static FORBIDDEN            = 403;
	public static NOT_FOUND            = 404;
	public static UNSUPPORTED          = 415;
	public static UNPROCESSABLE_ENTITY = 422;
}