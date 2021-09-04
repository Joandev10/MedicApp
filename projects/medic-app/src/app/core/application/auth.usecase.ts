import { AuthRepository } from './auth.repository';
import { StorageRepository } from './storage.repository';
import { Auth } from '../domain/auth.interface';
import { Token } from '../domain/token.interface';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthUseCase {
    constructor(
        private authRepository: AuthRepository,
        private storageRepository: StorageRepository,
        private router: Router
    ) {}

    login(auth: Auth): Observable<Token> {
        return this.authRepository.login(auth);
    }
    getNewAccessToken(refreshToken: string) {
        return this.authRepository.getNewAccessToken(refreshToken);
    }

    logout(): Observable<any> {
        this.storageRepository.clear();
        this.router.navigateByUrl('/');
        return of();
    }

    setStorage(nameProperty: string, value: string) {
        this.storageRepository.setStorage(nameProperty, value);
    }

    getStorage(nameProperty: string) {
        return this.storageRepository.getStorage(nameProperty);
    }
    clear() {
        this.storageRepository.clear();
    }
    getStatusUser(): boolean {
        return !!this.storageRepository.getStorage('accessToken');
    }
    getFieldInToken(fieldName: string): string | null {
        return this.storageRepository.getFieldInToken(fieldName);
    }
}
