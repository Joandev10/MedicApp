import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
    selector: 'med-paginator',
    templateUrl: './paginator.component.html',
    styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {
    @Input('pageSize') pageSize: number = 0;
    @Input('length') length: number = 0;
    @Output('page') page: EventEmitter<number> = new EventEmitter<number>();
    constructor() {}

    ngOnInit(): void {}

    changePage(event: PageEvent) {
        console.log(event.pageIndex);
        this.page.emit(event.pageIndex);
    }
}
