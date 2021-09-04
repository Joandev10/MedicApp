import { Component, OnInit } from '@angular/core';
import { environment } from 'projects/medic-app/src/environments/environment';
import { MetaDataColumn } from '../../../../shared/interfaces/metadatacolumn.interface';
import { KeyPadButton } from '../../../../shared/interfaces/keypadbutton.interface';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormDriverComponent } from '../../components/form-driver/form-driver.component';
import { DriverUseCase } from '../../../application/driver.usecase';
import { DriverModel } from '../../../domain/driver.model';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UtilsService } from '../../../../shared/services/utils.service';
import { DtoDriverExport } from '../../../application/driver-export.dto';

@Component({
    selector: 'med-drivers',
    templateUrl: './drivers.component.html',
    styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {
    obsFinish = new Subject<any>();
    totalRecords: number = 0;
    data: DriverModel[] = [];

    metaDataColumns: MetaDataColumn[] = [
        { field: 'id', title: 'ID' },
        { field: 'name', title: 'Nombre completo del conductor' }
    ];

    keypadbuttons: KeyPadButton[] = [
        { icon: 'picture_as_pdf', tooltip: 'DESCARGAR', color: 'warn', action: 'DOWNLOAD' },
        { icon: 'add', tooltip: 'AGREGAR', color: 'primary', action: 'NEW' }
    ];

    pageCurrent = 0;
    pageSize = environment.pageSize;

    constructor(public dialog: MatDialog, private driverUseCase: DriverUseCase, private utilService: UtilsService) {}

    ngOnInit(): void {
        this.loadDataByPage(0);
    }

    loadDataByPage(page: number) {
        this.driverUseCase
            .getPage(page)
            .pipe(takeUntil(this.obsFinish))
            .subscribe((response) => {
                this.data = response.records as DriverModel[];
                this.totalRecords = response.totalRecords;
            });
    }

    changePage(page: number) {
        this.pageCurrent = page;
        this.loadDataByPage(page);
    }

    action(action: string) {
        switch (action) {
            case 'NEW':
                this.openForm();
                break;
            case 'DOWNLOAD':
                this.download();
                break;
        }
        console.log(action);
    }
    edit(row: any) {
        this.openForm(row);
    }

    openForm(data?: DriverModel) {
        const dialogRef: MatDialogRef<FormDriverComponent> = this.utilService.openModal(FormDriverComponent, {
            disableClose: true,
            panelClass: 'container-modal',
            data
        });

        dialogRef.afterClosed().subscribe((response) => {
            if (!response) {
                return;
            }
            if (response.id) {
                const driver = { ...response };
                delete driver.id;
                this.driverUseCase
                    .update(response.id, driver)
                    .pipe(takeUntil(this.obsFinish))
                    .subscribe((response) => {
                        this.loadDataByPage(this.pageCurrent);
                    });
            } else {
                this.driverUseCase
                    .save(response)
                    .pipe(takeUntil(this.obsFinish))
                    .subscribe((response) => {
                        this.loadDataByPage(this.pageCurrent);
                    });
            }
        });
    }
    delete(row: any) {
        this.utilService.confirm('¿Está seguro de querer eliminar?').subscribe((response) => {
            if (!response) {
                return;
            }
            this.driverUseCase
                .delete(row.id)
                .pipe(takeUntil(this.obsFinish))
                .subscribe((response) => {
                    this.loadDataByPage(this.pageCurrent);
                });
        });
    }
    download() {
        this.driverUseCase
            .getAll()
            .pipe(takeUntil(this.obsFinish))
            .subscribe((response) => {
                const dto = new DtoDriverExport();
                this.utilService.openSheet(response, dto, 'Listado de pilotos', 'pilotos');
            });
    }
    ngOnDestroy(): void {
        this.obsFinish.next();
        this.obsFinish.complete();
    }
}
