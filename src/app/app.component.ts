import {Component} from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Halo IoT';
  subtitle = 'Hi';

  isDashboardActive = true;
  isDevicesActive = false;
  isCatalogueActive = false;
  isManageUsersActive = false;

  /*
     toggleClass( who ) {
       //  document.getElementById( who ).classList.toggle("active");
     }*/


  constructor(router: Router) {
    //  isDashboardActive: true;
    router.events.subscribe((url: any) => {
    //  console.log(router.url);

      this.changeState(router.url);
    });


  }


  changeState(url) {


    if (url === '/') {
      this.isDashboardActive = true;
      this.isDevicesActive = false;
      this.isCatalogueActive = false;
      this.isManageUsersActive = false;
    } else if (url === '/home/summary-dashboard/overview') {
      this.isDashboardActive = true;
      this.isDevicesActive = false;
      this.isCatalogueActive = false;
      this.isManageUsersActive = false;
    } else if (url === '/home') {
      this.isDashboardActive = true;
      this.isDevicesActive = false;
      this.isCatalogueActive = false;
      this.isManageUsersActive = false;
    } else if (url === '/devices') {
      this.isDashboardActive = false;
      this.isDevicesActive = true;
      this.isCatalogueActive = false;
      this.isManageUsersActive = false;
    } else if (url === '/catalogue/device-types') {
      this.isDashboardActive = false;
      this.isDevicesActive = false;
      this.isCatalogueActive = true;
      this.isManageUsersActive = false;
    } else if (url === '/manage-users') {
      this.isDashboardActive = false;
      this.isDevicesActive = false;
      this.isCatalogueActive = false;
      this.isManageUsersActive = true;
    }

  }

}
