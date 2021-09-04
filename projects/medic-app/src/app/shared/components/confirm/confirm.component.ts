import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'med-confirm',
    templateUrl: './confirm.component.html',
    styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {
    message: string = '¿Estas seguro de querer eliminar?';

    constructor() {}

    ngOnInit(): void {}
}
