import React, {useState} from "react";
import {Alert, View, Modal, StyleSheet, TextInput, Button, Text} from "react-native";
import * as Device from "expo-device";
import axios from "axios";
import * as SecureStore from "expo-secure-store";
import {HashString, environments} from "../../environments";
import ApiResponce from "../models/ApiResponce";
import ApiUserResponse from "../models/ApiUserResponse";
import {getPreference} from "../../preferences";

const showPinPopup = (message: string): Promise<string | null> => {
    return new Promise((resolve) => {
        let pin = "";

        const [input, setInput] = useState("");

        const onChangeText = (text: string) => setInput(text);

        Alert.alert(
            "OTP Verification",
            message,
            [
                {
                    text: "Cancel",
                    style: "cancel",
                },
                {
                    text: "Confirm",
                },
            ],
            {cancelable: false}
        );
    });
};

const RegisterNewDevice = async (): Promise<ApiUserResponse | null> => {
    try {
        const pinPopupResult = "12345";

        if (pinPopupResult) {
            const secretKey = await HashString(pinPopupResult, environments.micashSecriteKey);
            const deviceInfo = `${Device.modelName} ${Device.manufacturer} ${Device.deviceName} ${Device.osVersion} ${Device.osName} ${Device.deviceYearClass}`;

            const url = `${environments.url}Individual/ApiNewDeviceOTP`;
            const cookieKey = await SecureStore.getItemAsync("CookeyKey");
            
            const response = await axios.post(
                url,
                {
                    pin: secretKey,
                    deviceDetails: deviceInfo,
                },
                {
                    headers: {
                        Cookie: cookieKey || "",
                    },
                }
            );

            const popNewDeviceResultResponce: ApiResponce = response.data;

            if (popNewDeviceResultResponce.success) {
                await SecureStore.setItemAsync(environments.micashSecriteKey, popNewDeviceResultResponce.user.authKey);
                await SecureStore.setItemAsync("pin", await getPreference("pin"));

                if (await isBiometricAvailable()) {
                    await SecureStore.setItemAsync("enableBiometricAuthorisation", "true");
                }

                return popNewDeviceResultResponce.user;
            } else {
                Alert.alert("Login error", popNewDeviceResultResponce.reason, [{text: "Ok"}]);
            }
        }
    } catch (error) {
        Alert.alert("Login error", "Something went wrong", [{text: "Ok"}]);
    }

    return null;
};

const isBiometricAvailable = async (): Promise<boolean> => {
    // Check if biometric authentication is available on the device
    // This is a placeholder function and should be implemented
    return true;
};

export default RegisterNewDevice;
