import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicsRoutingModule } from './medics-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MedicsComponent } from './views/pages/medics/medics.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
    declarations: [MedicsComponent],
    imports: [
        CommonModule,
        MedicsRoutingModule,
        SharedModule,
        MatTableModule,
        MatIconModule,
        MatButtonModule,
        MatTooltipModule
    ]
})
export class MedicsModule {}
