import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicsRoutingModule } from './medics-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MedicsComponent } from './views/pages/medics/medics.component';

@NgModule({
    declarations: [
    MedicsComponent
  ],
    imports: [CommonModule, MedicsRoutingModule, SharedModule]
})
export class MedicsModule {}
