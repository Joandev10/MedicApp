import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicsComponent } from './views/pages/medics/medics.component';

const routes: Routes = [{ path: '', component: MedicsComponent }];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MedicsRoutingModule {}
