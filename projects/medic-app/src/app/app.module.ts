import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IconService } from './shared/services/icon.service';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { Paginator } from './shared/clases/paginator.class';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        CoreModule,
        MatSidenavModule,
        MatToolbarModule,
        FlexLayoutModule,
        HttpClientModule,
        MatIconModule
    ],
    providers: [{ provide: MatPaginatorIntl, useClass: Paginator }],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(private iconService: IconService) {}
}
