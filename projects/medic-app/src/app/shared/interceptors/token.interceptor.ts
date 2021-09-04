import { Injectable, Injector } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthUseCase } from '../../core/application/auth.usecase';
import { catchError, retry, mergeMap } from 'rxjs/operators';
import { Token } from '../../core/domain/token.interface';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(private injector: Injector) {}

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        if (request.url.includes('/users/login')) {
            return next.handle(request);
        }
        const authUseCase = this.injector.get(AuthUseCase);
        const accessToken = authUseCase.getStorage('accessToken');
        const requestClonaded = request.clone({
            headers: request.headers.append('Authorization', `Bearer ${accessToken}`)
        });
        return next.handle(requestClonaded).pipe(
            catchError((error: HttpErrorResponse) => {
                if (!(error.error instanceof ErrorEvent) && error.status === 409) {
                    const refreshToken = authUseCase.getStorage('refreshToken');
                    return authUseCase.getNewAccessToken(refreshToken || '').pipe(
                        retry(3),
                        mergeMap((response: Token) => {
                            authUseCase.setStorage('accessToken', response.accessToken);
                            authUseCase.setStorage('refreshToken', response.refreshToken);
                            const newRequestClonaded = request.clone({
                                headers: request.headers.append('Authorization', `Bearer ${response.accessToken}`)
                            });
                            return next.handle(newRequestClonaded);
                        })
                    );
                } else if (error.status === 401) {
                    return authUseCase.logout();
                } else {
                    if (error.error && error.error.result) {
                        return throwError(error.error.result);
                    } else {
                        return throwError(error);
                    }
                }
            })
        );
    }
}
