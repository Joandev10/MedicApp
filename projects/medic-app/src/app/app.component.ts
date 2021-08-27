import { Component } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { User } from './users/domain/user.interface';

@Component({
    selector: 'med-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    expanded: boolean = true;
    title = 'medic-app';

    login(user: User) {
        console.log(user);
    }
    toogleMenu(expanded: boolean) {
        this.expanded = expanded;
    }
}
