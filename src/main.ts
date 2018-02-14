import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';

import 'rxjs/add/operator/filter';
import { DevicesComponent } from './app/devices/devices.component';
import { CatalogueComponent } from './app/catalogue/catalogue.component';
import { ManageUsersComponent } from './app/manage-users/manage-users.component';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
