import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriversRoutingModule } from './drivers-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DriversComponent } from './views/pages/drivers/drivers.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormDriverComponent } from './views/components/form-driver/form-driver.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { DriverRepository } from './application/driver.repository';
import { DriversService } from './infraestructure/drivers.service';
import { DriverUseCase } from './application/driver.usecase';

@NgModule({
    declarations: [DriversComponent, FormDriverComponent],
    imports: [
        CommonModule,
        DriversRoutingModule,
        SharedModule,
        MatTableModule,
        MatIconModule,
        MatButtonModule,
        MatTooltipModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatInputModule,
        FlexLayoutModule,
        ReactiveFormsModule
    ],
    providers: [{ provide: DriverRepository, useClass: DriversService }, DriverUseCase]
})
export class DriversModule {}
