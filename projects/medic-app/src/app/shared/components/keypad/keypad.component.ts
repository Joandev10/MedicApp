import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { KeyPadButton } from '../../interfaces/keypadbutton.interface';

@Component({
    selector: 'med-keypad',
    templateUrl: './keypad.component.html',
    styleUrls: ['./keypad.component.css']
})
export class KeypadComponent implements OnInit {
    @Input('keypadbuttons') keypadbuttons: KeyPadButton[] = [];
    @Output('clickButton') clickButton: EventEmitter<string> = new EventEmitter<string>();
    constructor() {}

    ngOnInit(): void {}

    action(action: string) {
        this.clickButton.emit(action);
    }
}
