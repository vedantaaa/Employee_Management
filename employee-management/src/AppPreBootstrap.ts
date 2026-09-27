import {AppConfig} from './app-config.interface';

export async function loadAppConfig(): Promise<AppConfig>{
    const response = await fetch('/appconfig.json');

    if(!response.ok){
        throw new Error(
`Failed to load app configuration: ${response.status}`
        );
    }
    return await response.json() as AppConfig;
}