import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
// @ts-ignore
import * as angular from 'angular';
import { setAngularJSGlobal } from '@angular/upgrade/static';

// @ts-ignore
import ajsApp from './app/app.module.ajs.js';
// @ts-ignore
import states from './app/app.config.ajs';

states(ajsApp);

setAngularJSGlobal(angular);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
