import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLoginComponent } from './views/pages/page-login/page-login.component';
import { LoginModule } from '../../../../login/src/lib/login.module';

@NgModule({
    declarations: [PageLoginComponent],
    imports: [CommonModule, LoginModule],
    exports: [PageLoginComponent]
})
export class CoreModule {}
