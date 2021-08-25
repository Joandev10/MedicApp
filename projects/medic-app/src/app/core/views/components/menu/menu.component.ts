import { Component, Input, OnInit } from '@angular/core';
import { MenuService } from '../../../../shared/services/menu.service';
import { Menu } from '../../../interfaces/menu.interface';

@Component({
    selector: 'med-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
    menu: Menu[] = [];
    @Input('expanded') expanded: boolean = true;

    constructor(private menuService: MenuService) {}

    ngOnInit(): void {
        this.menu = this.menuService.getMenu();
    }
}
