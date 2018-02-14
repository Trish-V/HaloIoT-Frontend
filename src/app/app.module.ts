import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import { AgmCoreModule } from '@agm/core';

import {AppComponent} from './app.component';
import {DevicesComponent} from './devices/devices.component';
import {CatalogueComponent} from './catalogue/catalogue.component';
import {ManageUsersComponent} from './manage-users/manage-users.component';
import {routes} from './app.router';
import {HomeComponent} from './home/home.component';
import {TableOverviewComponent} from './table-overview/table-overview.component';
import {SummeryDashboardComponent} from './summery-dashboard/summer-dashboard.component';
import { GraphComponent } from './graph/graph.component';
import { AlertsComponent } from './alerts/alerts.component';
import { NotificataionsComponent } from './notificataions/notificataions.component';

/*
import { DeviceComponent } from './catalogue/device.component';
import { CatalogueComponent } from './device/catalogue.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
*/


@NgModule({
  declarations: [
    AppComponent,
    DevicesComponent,
    CatalogueComponent,
    CatalogueComponent,
    ManageUsersComponent,
    HomeComponent,
    TableOverviewComponent,
    SummeryDashboardComponent,
    GraphComponent,
    AlertsComponent,
    NotificataionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAAMIjsPXqD75Hcm3zPUJueCQxZoxTxDT4'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
