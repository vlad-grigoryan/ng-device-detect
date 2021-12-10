import { BrowserTypes, DeviceTypes, OsTypes } from './constants';
import {IDevice} from "ua-parser-js";
import {isIOS13Check, setDefaults} from "./utils";

// device types
export const isMobileType = ({ type }: IDevice): boolean => type === DeviceTypes.Mobile;
export const isMobileAndTabletType = ({ type }: IDevice) =>
    type === DeviceTypes.Mobile || type === DeviceTypes.Tablet;
export const isSmartTVType = ({ type }: IDevice) => type === DeviceTypes.SmartTv;
export const isBrowserType = ({ type }: IDevice) => type === DeviceTypes.Browser;
export const isWearableType = ({ type }: IDevice) => type === DeviceTypes.Wearable;
export const isConsoleType = ({ type }: IDevice) => type === DeviceTypes.Console;
export const isEmbeddedType = ({ type }: IDevice) => type === DeviceTypes.Embedded;
export const getMobileVendor = ({ vendor }: IDevice) => setDefaults(vendor);
export const getMobileModel = ({ model }: IDevice) => setDefaults(model);
export const getDeviceType = ({ type }: IDevice) => setDefaults(type, 'browser');


// engine types
export const getIPad13 = () => isIOS13Check('iPad');

