import {Injectable, inject} from '@angular/core';
import {APP_CONFIG} from '../injection-tokens/app-config.token';
// import {AppConfig} from '../../../../../src/app-config.interface';

@Injectable({
    providedIn: 'root'
})
export class GlobalConfigService {
    private readonly config = inject(APP_CONFIG);
    
    get apiBaseUrl(): string{
        return this.config.api.baseUrl;
    }
    get apiTimeout(): number{
        return this.config.api.timeout;
    }
    get defaultPageSize(): number{
        return this.config.pagination.defaultPageSize;
    }
    get defaultLanguage(): string{
        return this.config.localization.defaultLanguage;
    }
    get appName(): string{
        return this.config.app.name;
    }
    get appVersion(): string{
        return this.config.app.version;
    }
}