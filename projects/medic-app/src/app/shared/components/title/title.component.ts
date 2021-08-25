import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from '../../services/menu.service';
import { Menu } from '../../../core/interfaces/menu.interface';

@Component({
    selector: 'med-title',
    templateUrl: './title.component.html',
    styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
    menu: Menu;
    constructor(private menuService: MenuService, private activatedRoute: ActivatedRoute) {
        const currentPath = '/' + this.activatedRoute.snapshot.pathFromRoot[1].routeConfig?.path;
        this.menu = this.menuService.getMenuByURL(currentPath);
    }

    ngOnInit(): void {}
}
