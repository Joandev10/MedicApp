import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from '../shared/shared.module';
import { UsersComponent } from './views/pages/users/users.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
    declarations: [UsersComponent],
    imports: [
        CommonModule,
        UsersRoutingModule,
        SharedModule,
        MatTableModule,
        MatIconModule,
        MatButtonModule,
        MatTooltipModule
    ]
})
export class UsersModule {}
