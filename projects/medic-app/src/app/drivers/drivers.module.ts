import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriversRoutingModule } from './drivers-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DriversComponent } from './views/pages/drivers/drivers.component';

@NgModule({
    declarations: [
    DriversComponent
  ],
    imports: [CommonModule, DriversRoutingModule, SharedModule]
})
export class DriversModule {}
