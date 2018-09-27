import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()

export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        //    return this.authService.isAuthenticated()
        //     .then(
        //         (authenticated: boolean) => {
        //             if(authenticated) {
        //                 return true;
        //             } else {
        //                 this.router.navigate(['/']);
        //             }
        //         }
        //     )
        // if (this.authService.isAuthenticated()) {
        //     return true;
        // } else {
        //     this.router.navigate(['/']);
        // }
        return this.authService.isAuthenticated();

    }
}