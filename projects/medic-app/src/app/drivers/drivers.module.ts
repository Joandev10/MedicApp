import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriversRoutingModule } from './drivers-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DriversComponent } from './views/pages/drivers/drivers.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
    declarations: [DriversComponent],
    imports: [
        CommonModule,
        DriversRoutingModule,
        SharedModule,
        MatTableModule,
        MatIconModule,
        MatButtonModule,
        MatTooltipModule
    ]
})
export class DriversModule {}
