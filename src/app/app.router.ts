
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {DevicesComponent} from './devices/devices.component';
import {CatalogueComponent} from './catalogue/catalogue.component';
import {ManageUsersComponent} from './manage-users/manage-users.component';
import {HomeComponent} from './home/home.component';

import {SummeryDashboardComponent} from './summery-dashboard/summer-dashboard.component';
import {TableOverviewComponent} from './table-overview/table-overview.component';
import {GraphComponent} from './graph/graph.component';
import {AlertsComponent} from './alerts/alerts.component';
import {NotificataionsComponent} from './notificataions/notificataions.component';



export const router: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'home', component: HomeComponent, children: [
      {path: '', redirectTo: 'summary-dashboard/overview', pathMatch: 'full'},
      {path: 'summary-dashboard/overview', component: TableOverviewComponent},
      {path: 'summary-dashboard/graph', component: GraphComponent},
      {path: 'summary-dashboard/alerts', component: AlertsComponent},
      {path: 'summary-dashboard/notification', component: NotificataionsComponent}
    ]
  },

  {path: 'devices', component: DevicesComponent},
  {path: 'catalogue/device-types', component: CatalogueComponent},
  {path: 'manage-users', component: ManageUsersComponent},
  {path: 'home/summary-dashboard/', component: TableOverviewComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);


