import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoriesComponent } from './views/pages/histories/histories.component';

const routes: Routes = [{ path: '', component: HistoriesComponent }];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HistoriesRoutingModule {}
