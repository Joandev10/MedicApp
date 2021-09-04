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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { Paginator } from './shared/clases/paginator.class';
import { ConfigModule } from './config/modules/config.module';
import { MED_config } from './config/constants/config.constant';
import { TokenInterceptor } from './shared/interceptors/token.interceptor';
import { RecaptchaFormsModule } from 'ng-recaptcha';
import { SharedModule } from './shared/shared.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        CoreModule,
        SharedModule,
        MatSidenavModule,
        MatToolbarModule,
        FlexLayoutModule,
        HttpClientModule,
        MatIconModule,
        ConfigModule.forRoot(MED_config),
        HttpClientModule,
        RecaptchaFormsModule
    ],
    providers: [
        { provide: MatPaginatorIntl, useClass: Paginator },
        { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(private iconService: IconService) {}
}
