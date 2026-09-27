export interface AppConfig {
    app: {
        name: string;
        version: string;
    };
    api: {
        baseUrl: string;
        timeout: number;
    };
    pagination: {
        defaultPageSize: number;
    };
    localization: {
        defaultLanguage: string;
    };
}