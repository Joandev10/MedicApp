import { Component, OnInit } from '@angular/core';
import { environment } from 'projects/medic-app/src/environments/environment';
import { MetaDataColumn } from '../../../../shared/interfaces/metadatacolumn.interface';
import { KeyPadButton } from '../../../../shared/interfaces/keypadbutton.interface';

@Component({
    selector: 'med-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
    dataOriginal: any[] = [
        { id: 1, nombre: 'jpuma', fecha: new Date() },
        { id: 2, nombre: 'cpuma', fecha: new Date() },
        { id: 3, nombre: 'lpuma', fecha: new Date() },
        { id: 4, nombre: 'jpuma', fecha: new Date() },
        { id: 5, nombre: 'cpuma', fecha: new Date() },
        { id: 6, nombre: 'jpuma', fecha: new Date() },
        { id: 7, nombre: 'cpuma', fecha: new Date() },
        { id: 8, nombre: 'jpuma', fecha: new Date() },
        { id: 9, nombre: 'cpuma', fecha: new Date() },
        { id: 10, nombre: 'jpuma', fecha: new Date() },
        { id: 11, nombre: 'cpuma', fecha: new Date() },
        { id: 12, nombre: 'jpuma', fecha: new Date() },
        { id: 13, nombre: 'cpuma', fecha: new Date() },
        { id: 14, nombre: 'jpuma', fecha: new Date() }
    ];

    data: any[] = [];

    metaDataColumns: MetaDataColumn[] = [
        { field: 'id', title: 'ID' },
        { field: 'nombre', title: 'Nombre de usuario' },
        { field: 'fecha', title: 'Fecha' }
    ];
    keypadbuttons: KeyPadButton[] = [
        { icon: 'picture_as_pdf', tooltip: 'DESCARGAR', color: 'warn', action: 'DOWNLOAD' },
        { icon: 'add', tooltip: 'AGREGAR', color: 'primary', action: 'NEW' }
    ];

    pageSize = environment.pageSize;
    pageCurrent = 0;

    constructor() {}

    ngOnInit(): void {
        this.loadDataByPage();
    }
    loadDataByPage() {
        this.data = this.dataOriginal.slice(
            this.pageCurrent * this.pageSize,
            this.pageCurrent * this.pageSize + this.pageSize
        );
    }

    changePage(page: number) {
        this.pageCurrent = page;
        this.loadDataByPage();
    }
    action(action: string) {
        console.log(action);
    }
}
