import { Component } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { User } from './users/domain/user.interface';
import { ConfigService } from './config/services/config.service';
import { ConfigLayout } from './config/interfaces/config.interface';

@Component({
    selector: 'med-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    expanded: boolean = true;
    title = 'medic-app';
    config!: ConfigLayout;

    constructor(private readonly configService: ConfigService) {
        this.configService.configuration.subscribe((config: ConfigLayout) => {
            this.config = config;
        });
    }

    login(user: User) {
        console.log(user);
    }
    toogleMenu(expanded: boolean) {
        this.expanded = expanded;
    }
}
