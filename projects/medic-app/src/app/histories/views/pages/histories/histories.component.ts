import { Component, OnInit } from '@angular/core';
import { environment } from 'projects/medic-app/src/environments/environment';
import { MetaDataColumn } from '../../../../shared/interfaces/metadatacolumn.interface';
import { KeyPadButton } from '../../../../shared/interfaces/keypadbutton.interface';

@Component({
    selector: 'med-histories',
    templateUrl: './histories.component.html',
    styleUrls: ['./histories.component.css']
})
export class HistoriesComponent implements OnInit {
    dataOriginal: any[] = [
        { id: 1, nombrePaciente: 'Jose Puma Chavez', nombreMedico: 'Julio Ortiz Peñalosa', fecha: new Date() },
        { id: 2, nombrePaciente: 'Carlos Puma Chavez', nombreMedico: 'Hector Pino Acuña', fecha: new Date() },
        { id: 3, nombrePaciente: 'Luis Puma Chavez', nombreMedico: 'Moises Cevedo Ramos', fecha: new Date() },
        { id: 4, nombrePaciente: 'Jose Puma Chavez', nombreMedico: 'Julio Ortiz Peñalosa', fecha: new Date() },
        { id: 5, nombrePaciente: 'Carlos Puma Chavez', nombreMedico: 'Hector Pino Acuña', fecha: new Date() },
        { id: 6, nombrePaciente: 'Luis Puma Chavez', nombreMedico: 'Moises Cevedo Ramos', fecha: new Date() },
        { id: 7, nombrePaciente: 'Jose Puma Chavez', nombreMedico: 'Julio Ortiz Peñalosa', fecha: new Date() },
        { id: 8, nombrePaciente: 'Carlos Puma Chavez', nombreMedico: 'Hector Pino Acuña', fecha: new Date() },
        { id: 9, nombrePaciente: 'Luis Puma Chavez', nombreMedico: 'Moises Cevedo Ramos', fecha: new Date() },
        { id: 10, nombrePaciente: 'Jose Puma Chavez', nombreMedico: 'Julio Ortiz Peñalosa', fecha: new Date() },
        { id: 11, nombrePaciente: 'Carlos Puma Chavez', nombreMedico: 'Hector Pino Acuña', fecha: new Date() },
        { id: 12, nombrePaciente: 'Luis Puma Chavez', nombreMedico: 'Moises Cevedo Ramos', fecha: new Date() },
        { id: 13, nombrePaciente: 'Jose Puma Chavez', nombreMedico: 'Julio Ortiz Peñalosa', fecha: new Date() },
        { id: 14, nombrePaciente: 'Carlos Puma Chavez', nombreMedico: 'Hector Pino Acuña', fecha: new Date() },
        { id: 15, nombrePaciente: 'Luis Puma Chavez', nombreMedico: 'Moises Cevedo Ramos', fecha: new Date() }
    ];
    data: any[] = [];

    metaDataColumns: MetaDataColumn[] = [
        { field: 'id', title: 'ID' },
        { field: 'nombrePaciente', title: 'Nombre completo del paciente' },
        { field: 'nombreMedico', title: 'Nombre completo del medico' },
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
