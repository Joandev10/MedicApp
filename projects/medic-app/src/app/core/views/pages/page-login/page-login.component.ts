import { Component, OnInit, OnDestroy } from '@angular/core';
import { ConfigService } from '../../../../config/services/config.service';
import { Router } from '@angular/router';
import { Auth } from '../../../domain/auth.interface';
import { Subscription } from 'rxjs';
import { AuthUseCase } from '../../../application/auth.usecase';

@Component({
    selector: 'med-page-login',
    templateUrl: './page-login.component.html',
    styleUrls: ['./page-login.component.css']
})
export class PageLoginComponent implements OnInit, OnDestroy {
    subscription!: Subscription;
    constructor(
        private readonly configService: ConfigService,
        private router: Router,
        private authUseCase: AuthUseCase
    ) {
        this.configService.configuration = {
            layout: {
                header: { hidden: true },
                menu: { hidden: true }
            }
        };
    }
    ngOnInit(): void {}
    login(auth: Auth) {
        this.subscription = this.authUseCase.login(auth).subscribe((response) => {
            this.authUseCase.setStorage('accessToken', response.accessToken);
            this.authUseCase.setStorage('refreshToken', response.refreshToken);
            this.router.navigate(['/dashboard']);
        });
        //this.router.navigate(['/dashboard']);
    }
    ngOnDestroy(): void {
        this.configService.configuration = {
            layout: {
                header: { hidden: false },
                menu: { hidden: false }
            }
        };
        this.subscription.unsubscribe();
    }
}
