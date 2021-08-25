import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoriesRoutingModule } from './histories-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HistoriesComponent } from './views/pages/histories/histories.component';

@NgModule({
    declarations: [
    HistoriesComponent
  ],
    imports: [CommonModule, HistoriesRoutingModule, SharedModule]
})
export class HistoriesModule {}
