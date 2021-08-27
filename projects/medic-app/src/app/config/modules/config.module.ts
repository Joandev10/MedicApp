import { ModuleWithProviders, NgModule } from '@angular/core';
import { CONFIG_TOKEN } from '../tokens/index';
import { ConfigLayout } from '../interfaces/config.interface';

@NgModule()
export class ConfigModule {
    static forRoot(config: ConfigLayout): ModuleWithProviders<ConfigModule> {
        return {
            ngModule: ConfigModule,
            providers: [{ provide: CONFIG_TOKEN, useValue: config }]
        };
    }
}
