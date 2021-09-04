import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Components
import { TitleComponent } from './components/title/title.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { ContainerComponent } from './components/container/container.component';
import { TableComponent } from './components/table/table.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { KeypadComponent } from './components/keypad/keypad.component';
import { DownloadComponent } from './components/download/download.component';
//Modules
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';
import {
    PerfectScrollbarConfigInterface,
    PerfectScrollbarModule,
    PERFECT_SCROLLBAR_CONFIG
} from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
};

@NgModule({
    declarations: [
        TitleComponent,
        ContainerComponent,
        TableComponent,
        PaginatorComponent,
        KeypadComponent,
        ConfirmComponent,
        DownloadComponent
    ],
    imports: [
        CommonModule,
        MatToolbarModule,
        MatIconModule,
        FlexLayoutModule,
        MatCardModule,
        MatTableModule,
        MatPaginatorModule,
        MatButtonModule,
        MatTooltipModule,
        MatDialogModule,
        MatBottomSheetModule,
        MatListModule
    ],
    exports: [
        TitleComponent,
        ContainerComponent,
        TableComponent,
        PaginatorComponent,
        PerfectScrollbarModule,
        KeypadComponent,
        MatDialogModule,
        ConfirmComponent,
        DownloadComponent
    ],
    providers: [
        {
            provide: PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        }
    ]
})
export class SharedModule {}
