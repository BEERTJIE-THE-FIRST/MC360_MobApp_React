// DeviceInfoUtil.js

import { Platform } from "react-native";
import Constants from "expo-constants";

export default class DeviceInfoUtil {
  static getModel() {
    return Constants.deviceName;
  }

  static getManufacturer() {
    return Constants.deviceName; // Expo doesn't provide manufacturer info
  }

  static getDeviceName() {
    return Constants.deviceName;
  }

  static getVersionString() {
    return (
      Constants.platform?.ios?.systemVersion ||
      Constants.platform?.android?.versionCode ||
      ""
    );
  }

  static getPlatform() {
    return Platform.OS;
  }

  static getIdiom() {
    // Implement logic to determine device idiom (e.g., phone, tablet)
    return "Phone"; // Placeholder value, adjust as needed
  }

  static getDeviceType() {
    // Expo doesn't provide this information directly
    return "Physical"; // Placeholder value, adjust as needed
  }
}
