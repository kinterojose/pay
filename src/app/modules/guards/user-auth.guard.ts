import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthStorageService } from '../../commons/services/auth-storage.service';
 
@Injectable()
export class UserAuthGuard implements CanActivate {
 
    constructor(
        public router: Router,
        public authStorageService: AuthStorageService
    ) { }
 
    canActivate(): Promise<boolean>{
        let promise = new Promise((resolve, reject) => {
            if(this.authStorageService.isToken())
                resolve(true);
            else
                reject(false);
        }).catch(() => {
            this.router.navigate(['/'])
        });

        return promise.then(() => {
            return true;
        }, error => {
            this.router.navigate(['/panel'])
        })
    }
}