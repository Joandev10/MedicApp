import { Component } from '@angular/core';
import { User } from './users/domain/user.interface';

@Component({
    selector: 'med-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'medic-app';
    login(user: User) {
        console.log(user);
    }
}
