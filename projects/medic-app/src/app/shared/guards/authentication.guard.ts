import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthUseCase } from '../../core/application/auth.usecase';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationGuard implements CanLoad {
    constructor(private authUseCase: AuthUseCase, private router: Router) {}
    canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
        const status = this.authUseCase.getStatusUser();
        if (!status) {
            this.router.navigate(['/']);
        }
        return status;
    }
}
