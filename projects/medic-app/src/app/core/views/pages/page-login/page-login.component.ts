import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../../../../users/domain/user.interface';

@Component({
    selector: 'med-page-login',
    templateUrl: './page-login.component.html',
    styleUrls: ['./page-login.component.css']
})
export class PageLoginComponent implements OnInit {
    @Output('onLogin') onLogin: EventEmitter<User> = new EventEmitter<User>();
    constructor() {}
    ngOnInit(): void {}
    login(user: User) {
        console.log(user);
        this.onLogin.emit(user);
    }
}
