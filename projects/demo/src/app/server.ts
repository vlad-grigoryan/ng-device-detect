import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { Inject, Injectable, Optional, PLATFORM_ID } from '@angular/core';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import { Request } from 'express';
import { NgDeviceDetectService } from '../../../ng-device-detect/src/lib/ng-device-detect.service';

@Injectable()
export class UniversalDeviceDetectorService extends NgDeviceDetectService {
  constructor(@Inject(PLATFORM_ID) platformId: any, @Optional() @Inject(REQUEST) request: Request) {
    super();
  }
}

@NgModule({
  imports: [AppModule, ServerModule],
  bootstrap: [AppComponent],
  providers: [{
    provide: NgDeviceDetectService,
    useClass: UniversalDeviceDetectorService
  },]
})
export class AppServerModule {}
