import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthUseCase } from '../../../application/auth.usecase';

@Component({
    selector: 'med-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    @Output('onExpand') onExpand: EventEmitter<boolean> = new EventEmitter<boolean>();
    expanded: boolean = true;
    username: string | null;

    constructor(private authUseCase: AuthUseCase) {
        this.username = this.authUseCase.getFieldInToken('name');
    }

    ngOnInit(): void {}

    expandMenu() {
        this.expanded = !this.expanded;
        this.onExpand.emit(this.expanded);
    }
    logout() {
        this.authUseCase.logout();
    }
}
