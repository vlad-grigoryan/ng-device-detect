import { Injectable } from '@angular/core';
import * as UAHelper from './parse';
import * as types from './types';


@Injectable({
  providedIn: 'root'
})
export class NgDeviceDetectService {

  constructor() { }

  public isSmartTV(): boolean  {
    return types.isSmartTVType(UAHelper.device)
  };
  public isMobileOnly(): boolean  {
    return types.isMobileType(UAHelper.device);
  };
  public isMobile(): boolean  {
    return types.isMobileAndTabletType(UAHelper.device) || !!types.getIPad13();
  };
  public isBrowser(): boolean  {
    return types.isBrowserType(UAHelper.device);
  };
  public isDesktop(): boolean  {
    return types.isBrowserType(UAHelper.device);
  };
  public isWearable(): boolean  {
    return types.isWearableType(UAHelper.device);
  };
  public isConsole(): boolean  {
    return types.isConsoleType(UAHelper.device);
  };
  public isEmbedded(): boolean  {
    return types.isEmbeddedType(UAHelper.device);
  };
  public mobileVendor(): string  {
    return types.getMobileVendor(UAHelper.device);
  };
  public mobileModel(): string  {
    return types.getMobileModel(UAHelper.device);
  };
  public deviceType(): string  {
    return types.getDeviceType(UAHelper.device);
  };
}
