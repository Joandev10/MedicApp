import { Component, OnInit } from '@angular/core';
import { environment } from 'projects/medic-app/src/environments/environment';
import { MetaDataColumn } from '../../../../shared/interfaces/metadatacolumn.interface';
import { KeyPadButton } from '../../../../shared/interfaces/keypadbutton.interface';

@Component({
    selector: 'med-medics',
    templateUrl: './medics.component.html',
    styleUrls: ['./medics.component.css']
})
export class MedicsComponent implements OnInit {
    dataOriginal: any[] = [
        { id: 1, nombre: 'Jose Puma Chavez', fecha: new Date() },
        { id: 2, nombre: 'Carlos Puma Chavez', fecha: new Date() },
        { id: 3, nombre: 'Luis Puma Chavez', fecha: new Date() },
        { id: 4, nombre: 'Jose Puma Chavez', fecha: new Date() },
        { id: 5, nombre: 'Carlos Puma Chavez', fecha: new Date() },
        { id: 6, nombre: 'Jose Puma Chavez', fecha: new Date() },
        { id: 7, nombre: 'Carlos Puma Chavez', fecha: new Date() },
        { id: 8, nombre: 'Jose Puma Chavez', fecha: new Date() },
        { id: 9, nombre: 'Carlos Puma Chavez', fecha: new Date() },
        { id: 10, nombre: 'Jose Puma Chavez', fecha: new Date() },
        { id: 11, nombre: 'Carlos Puma Chavez', fecha: new Date() },
        { id: 12, nombre: 'Jose Puma Chavez', fecha: new Date() },
        { id: 13, nombre: 'Carlos Puma Chavez', fecha: new Date() }
    ];

    data: any[] = [];

    metaDataColumns: MetaDataColumn[] = [
        { field: 'id', title: 'ID' },
        { field: 'nombre', title: 'Nombre completo del medico' },
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
