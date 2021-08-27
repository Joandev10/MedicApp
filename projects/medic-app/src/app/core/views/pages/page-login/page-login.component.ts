import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../../../../users/domain/user.interface';
import { ConfigService } from '../../../../config/services/config.service';
import { Router } from '@angular/router';

@Component({
    selector: 'med-page-login',
    templateUrl: './page-login.component.html',
    styleUrls: ['./page-login.component.css']
})
export class PageLoginComponent implements OnInit, OnDestroy {
    constructor(private readonly configService: ConfigService, private router: Router) {
        this.configService.configuration = {
            layout: {
                header: { hidden: true },
                menu: { hidden: true }
            }
        };
    }
    ngOnInit(): void {}
    login(user: User) {
        console.log(user);
        this.router.navigate(['/dashboard']);
    }
    ngOnDestroy(): void {
        this.configService.configuration = {
            layout: {
                header: { hidden: false },
                menu: { hidden: false }
            }
        };
    }
}
