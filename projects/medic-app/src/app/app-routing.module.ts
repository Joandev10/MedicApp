import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './core/views/pages/page-login/page-login.component';

const routes: Routes = [
    { path: '', component: PageLoginComponent, pathMatch: 'full' },
    { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule) },
    { path: 'histories', loadChildren: () => import('./histories/histories.module').then((m) => m.HistoriesModule) },
    { path: 'medics', loadChildren: () => import('./medics/medics.module').then((m) => m.MedicsModule) },
    { path: 'drivers', loadChildren: () => import('./drivers/drivers.module').then((m) => m.DriversModule) },
    { path: 'users', loadChildren: () => import('./users/users.module').then((m) => m.UsersModule) },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
