import React, {useState} from "react";
import {Alert, View, Modal, StyleSheet, TextInput, Button, Text} from "react-native";
import axios from "axios";
import * as SecureStore from "expo-secure-store";
import {HashString, environments} from "../../environments";
import ApiResponce from "../models/ApiResponce";
import ApiUserResponse from "../models/ApiUserResponse";
import {getPreference} from "../../preferences";
import DeviceInfoUtil from "../../essentials";

const RegisterNewDevice = async (codeInputs: string[]) => {
    try {

        let pinPopupResult:string = "";
        codeInputs.forEach((element: string) => {
            pinPopupResult += element;
        });

        if (pinPopupResult) {
            const secretKey = await HashString(pinPopupResult, environments.micashSecriteKey);

            const deviceInfo:string = `${DeviceInfoUtil.getModel()} ${DeviceInfoUtil.getManufacturer()} ${DeviceInfoUtil.getDeviceName()} ${DeviceInfoUtil.getVersionString()} ${DeviceInfoUtil.getPlatform()} ${DeviceInfoUtil.getIdiom()} ${DeviceInfoUtil.getDeviceType()}`;

            const url = `${environments.url}Individual/ApiNewDeviceOTP`;
            // const cookieKey = SecureStore.getItem("CookeyKey");
            // console.log(deviceInfo, secretKey);
            const response = await axios.post(
                url,
                {
                    pin: secretKey,
                    deviceDetails: deviceInfo,
                }
            );
            

            const popNewDeviceResultResponce: ApiResponce = response.data;

                // console.log("OTP", popNewDeviceResultResponce);

            if (popNewDeviceResultResponce.success) {
                //  SecureStore.setItem(environments.micashSecriteKey, popNewDeviceResultResponce.user.authKey);
                //  SecureStore.setItem("pin", await getPreference("pin"));

                if (await isBiometricAvailable()) {
                    //  SecureStore.setItem("enableBiometricAuthorisation", "true");
                }

                return popNewDeviceResultResponce;
            } else {
                Alert.alert("Incorrect OTP", `${popNewDeviceResultResponce.reason}`, [{text: "Ok"}]);
            }
        }
    } catch (error) {
        console.log("hit")
        console.log(error.message);
        // Alert.alert("Login error", "Something went wrong", [{text: "Ok"}]);
    }

    return null;
};

const isBiometricAvailable = async (): Promise<boolean> => {
    // Check if biometric authentication is available on the device
    // This is a placeholder function and should be implemented
    return true;
};

export default RegisterNewDevice;
