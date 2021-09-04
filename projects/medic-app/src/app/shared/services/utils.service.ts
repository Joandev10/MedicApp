import { Injectable } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ConfirmComponent } from '../components/confirm/confirm.component';
import { DownloadComponent } from '../components/download/download.component';
import { OptionsExport } from '../interfaces/options-export.interface';

@Injectable({
    providedIn: 'root'
})
export class UtilsService {
    constructor(public dialog: MatDialog, private bottomSheet: MatBottomSheet) {}

    confirm(message: string = ''): Observable<string> {
        const options = { disableClose: true, width: '320px' };
        const dialogRef: MatDialogRef<ConfirmComponent> = this.dialog.open(ConfirmComponent, options);
        if (message) {
            dialogRef.componentInstance.message = message;
        }
        return dialogRef.afterClosed();
    }
    openModal(
        classComponent: any,
        options: { [s: string]: string | number | boolean | object | null | undefined }
    ): MatDialogRef<any> {
        return this.dialog.open(classComponent, options);
    }
    openSheet(content: any = null, dto: any = null, title: string, fileName: string) {
        const options: OptionsExport = { content, dto, title, fileName };
        this.bottomSheet.open(DownloadComponent, { data: options });
    }
}
