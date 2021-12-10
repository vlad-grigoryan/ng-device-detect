import { Component, VERSION } from '@angular/core';
import { NgDeviceDetectService } from '../../../ng-device-detect/src/lib/ng-device-detect.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  propsToShow = ['userAgent', 'os', 'browser', 'device', 'os_version', 'browser_version', 'deviceType', 'orientation'];
  deviceInfo = null;
  version = VERSION.full;
  constructor(private deviceService: NgDeviceDetectService) {
  }

  get isMobile(): any {
    console.log(this.deviceService.mobileModel(), '!!!');
    return this.deviceService.isMobileOnly();
  }

}
