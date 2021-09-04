import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/medic-app/src/environments/environment';
import { Observable } from 'rxjs';
import { Auth } from '../domain/auth.interface';
import { Token } from '../domain/token.interface';
import { AuthRepository } from '../application/auth.repository';

@Injectable()
export class AuthOperation extends AuthRepository {
    constructor(private http: HttpClient) {
        super();
    }
    login(auth: Auth): Observable<Token> {
        return this.http.post<Token>(`${environment.pathAPI}/users/login`, auth);
    }
    getNewAccessToken(refreshToken: string): Observable<Token> {
        return this.http.get<Token>(`${environment.pathAPI}/users/refresh/${refreshToken}`);
    }
}
