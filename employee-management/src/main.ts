import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app';
import { loadAppConfig } from './AppPreBootstrap';
import { APP_CONFIG } from './app/shared/core/injection-tokens/app-config.token';

loadAppConfig()
  .then((config) => {
    return bootstrapApplication(AppComponent,
      {
        ...appConfig,
        providers: [
          ...(appConfig.providers ?? []),
          {
            provide: APP_CONFIG,
            useValue: config
          }
        ]
      }
    );
  })
  .catch((err) => console.error(err));
