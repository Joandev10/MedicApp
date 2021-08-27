import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'med-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    @Output('onExpand') onExpand: EventEmitter<boolean> = new EventEmitter<boolean>();
    expanded: boolean = true;

    constructor(private router: Router) {}

    ngOnInit(): void {}

    expandMenu() {
        this.expanded = !this.expanded;
        this.onExpand.emit(this.expanded);
    }
    logout() {
        this.router.navigateByUrl('/');
    }
}
