import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'med-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    @Output('onExpand') onExpand: EventEmitter<boolean> = new EventEmitter<boolean>();
    expanded: boolean = true;

    constructor() {}

    ngOnInit(): void {}

    expandMenu() {
        this.expanded = !this.expanded;
        this.onExpand.emit(this.expanded);
    }
}
