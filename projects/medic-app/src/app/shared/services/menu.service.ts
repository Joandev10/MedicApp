import { Injectable } from '@angular/core';
import { Menu } from '../../core/interfaces/menu.interface';

@Injectable({
    providedIn: 'root'
})
export class MenuService {
    private menus: Menu[] = [
        { title: 'Resumen', url: '/dashboard', icon: 'dashboard' },
        { title: 'Historias', url: '/histories', icon: 'history' },
        { title: 'Medicos', url: '/medics', icon: 'medic' },
        { title: 'Pilotos', url: '/drivers', icon: 'driver' },
        { title: 'Usuarios', url: '/users', icon: 'user' }
    ];

    getMenu(): Menu[] {
        return this.menus;
    }

    getMenuByURL(url: string): Menu {
        return this.menus.find((item) => item.url === url)!;
    }
    constructor() {}
}
