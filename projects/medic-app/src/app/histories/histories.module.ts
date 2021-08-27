import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoriesRoutingModule } from './histories-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HistoriesComponent } from './views/pages/histories/histories.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
    declarations: [HistoriesComponent],
    imports: [
        CommonModule,
        HistoriesRoutingModule,
        SharedModule,
        MatTableModule,
        MatIconModule,
        MatButtonModule,
        MatTooltipModule
    ]
})
export class HistoriesModule {}
