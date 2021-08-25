import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Icon } from '../interfaces/icon.interface';

@Injectable({
    providedIn: 'root'
})
export class IconService {
    icons: Icon[] = [
        { name: 'logo', path: '../assets/icons/ambulancia.svg' },
        { name: 'dashboard', path: '../assets/icons/tablero.svg' },
        { name: 'history', path: '../assets/icons/historia.svg' },
        { name: 'medic', path: '../assets/icons/medico.svg' },
        { name: 'driver', path: '../assets/icons/conductor.svg' },
        { name: 'user', path: '../assets/icons/programador.svg' }
    ];
    constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
        this.registryIcons();
    }
    registryIcons() {
        this.icons.forEach((icon) => {
            this.matIconRegistry.addSvgIcon(icon.name, this.domSanitizer.bypassSecurityTrustResourceUrl(icon.path));
        });
    }
}
