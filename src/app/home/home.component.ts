import {Component, OnInit} from '@angular/core';
import {IntervalObservable} from 'rxjs/observable/IntervalObservable';
import {Observable} from 'rxjs/Observable';

import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isOverviewActive = true;
  isGraphActive = false;
  isAlertsActive = false;
  isNotificationsActive = false;

  changeState(url: any): any {
    console.log(url);
    if (url === '/home/summary-dashboard/overview') {
      this.isOverviewActive = true;
      this.isGraphActive = false;
      this.isAlertsActive = false;
      this.isNotificationsActive = false;
    } else if (url === '/home/summary-dashboard/graph') {
      this.isOverviewActive = false;
      this.isGraphActive = true;
      this.isAlertsActive = false;
      this.isNotificationsActive = false;
    } else if (url === '/home/summary-dashboard/alerts') {
      this.isOverviewActive = false;
      this.isGraphActive = false;
      this.isAlertsActive = true;
      this.isNotificationsActive = false;
    } else if (url === '/home/summary-dashboard/notification') {
      this.isOverviewActive = false;
      this.isGraphActive = false;
      this.isAlertsActive = false;
      this.isNotificationsActive = true;
    }
  }






  constructor(router: Router) {
    router.events.subscribe((url: any) => {
      console.log(router.url);

      this.changeState(router.url);
    });

  }

  ngOnInit() {
  }

}
