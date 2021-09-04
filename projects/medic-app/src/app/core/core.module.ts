import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLoginComponent } from './views/pages/page-login/page-login.component';
import { LoginModule } from '../../../../login/src/lib/login.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './views/components/header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MenuComponent } from './views/components/menu/menu.component';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { AuthOperation } from './infraestructure/auth.operation';
import { StorageOperation } from './infraestructure/storage.operation';
import { AuthRepository } from './application/auth.repository';
import { StorageRepository } from './application/storage.repository';
import { UpperPipe } from './pipes/upper.pipe';

@NgModule({
    declarations: [PageLoginComponent, HeaderComponent, MenuComponent, UpperPipe],
    imports: [
        CommonModule,
        LoginModule,
        FlexLayoutModule,
        MatIconModule,
        MatButtonModule,
        MatMenuModule,
        MatListModule,
        MatToolbarModule,
        RouterModule
    ],
    exports: [PageLoginComponent, HeaderComponent, MenuComponent],
    providers: [
        { provide: AuthRepository, useClass: AuthOperation },
        { provide: StorageRepository, useClass: StorageOperation }
    ]
})
export class CoreModule {}
