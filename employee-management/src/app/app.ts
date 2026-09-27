import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// import { inject } from '@angular/core';
// import { GlobalConfigService } from './shared/core/configuration/global-config.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  protected readonly title = signal('employee-management');
  // private readonly globalConfig = inject(GlobalConfigService);

  // get appName(): string{
  //   return this.globalConfig.appName;
  // }
  // get apiBaseUrl(): string{
  //   return this.globalConfig.apiBaseUrl;
  // }
}
