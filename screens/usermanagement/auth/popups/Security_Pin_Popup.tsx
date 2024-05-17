import React, {useState, useEffect} from "react";
import {Text, View, TextInput, TouchableOpacity, Alert, ActivityIndicator} from "react-native";
import NetInfo from "@react-native-community/netinfo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {environments} from "../../../../environments";
import DeviceInfoUtil from "../../../../essentials";
import axios from "axios";

export const loginClicked = async (setIsLoading: React.Dispatch<React.SetStateAction<boolean>>, loginAttempts: any, phoneAndEmail: string, codeInputs: string[]) => {
    let pin = "";

    async function HashString(concatenatedInputs: any, micashSecriteKey: string) {
        try {
            const apiUrl = `${environments.url}/individual/EncryptPin`;
            const requestData = {
                text: concatenatedInputs,
                keyString: micashSecriteKey,
            };

            // console.log("requestData", requestData);

            const response = await axios.post(apiUrl, requestData);
            const responseData = response.data;

            if (!responseData.success) {
                Alert.alert("Login Failed", responseData.reason);
                return;
            }
            return responseData.message;
        } catch (error) {
            console.error("could not hash", error);
        }
    }

    function mobileNumber(number: string): string {
        if (!number.trim()) {
            throw new Error("Mobile is required");
        }

        // Remove white spaces
        const cleanedNumber = number.replace(/\s+/g, "");

        // Check if the number starts with "0" or "+27"
        if (!cleanedNumber.startsWith("0") && !cleanedNumber.startsWith("+27")) {
            throw new Error("Invalid mobile number");
        }

        // Convert "0" to "+27"
        if (cleanedNumber.startsWith("0")) {
            return "+27" + cleanedNumber.substring(1);
        }

        return cleanedNumber;
    }

    try {
        codeInputs.forEach((element: string) => {
            pin += element;
        });

        // console.log("codeInputs", codeInputs.length)
        setIsLoading(true);

        // const result = `${code1}${code2}${code3}${code4}${code5}`;
        if (!pin || pin.length !== 5 || !phoneAndEmail) {
            Alert.alert("Login Failed", "Please complete all required fields");
            setIsLoading(false);
            return;
        }

        // Check login attempts
        // if (loginAttempts >= 3) {
        //     Alert.alert('Login Attempts Exceeded', 'Too many login attempts. Your account has been blocked. Please contact support.');
        //     setIsLoading(false);
        //     return;
        // }

        //#region login logic
        let modNum = phoneAndEmail.trim();

        if (modNum.startsWith("0") && modNum.length === 10) {
            modNum = mobileNumber(phoneAndEmail);
        }

        let authkey = null;
        try {
            authkey = await AsyncStorage.getItem(environments.micashSecriteKey); // Get authkey from AsyncStorage
        } catch (error) {
            console.error("Error getting authkey from AsyncStorage:", error);
        }
        // Now pass pin to hashString
        const encryptedPassword = await HashString(pin, environments.micashSecriteKey);

        const deviceInfo = `${DeviceInfoUtil.getModel()} ${DeviceInfoUtil.getManufacturer()} ${DeviceInfoUtil.getDeviceName()} ${DeviceInfoUtil.getVersionString()} ${DeviceInfoUtil.getPlatform()} ${DeviceInfoUtil.getIdiom()} ${DeviceInfoUtil.getDeviceType()}`;
        const apiUrl = `${environments.url}/individual/ApiLogin`;
        const requestData = {
            username: modNum,
            passcode: encryptedPassword,
            deviceInfo: deviceInfo,
            authkey: authkey || "", // Provide an empty string if authkey is null
        };

        const response = await axios.post(apiUrl, requestData);
        const responseData = response.data;

        if (responseData.success) {
            if (response.headers["Set-Cookie"]) {
                const sessionCookie = response.headers["Set-Cookie"].split(";")[0].split("=")[1];
                try {
                    await AsyncStorage.setItem("CookeyKey", `ASP.NET_SessionId=${sessionCookie}`); // Store sessionCookie in AsyncStorage
                    await AsyncStorage.setItem("pin", pin); // Store pin in AsyncStorage
                } catch (error) {
                    console.error("Error storing data in AsyncStorage:", error);
                }
            }

            if (!responseData.new_device) {
                // Handle non-new device scenario
                // Implement your dismissal logic here (e.g., close modal, navigate back, etc.)
                Alert.alert("Success", "Login successful");
                setIsLoading(false);
                return "Success"
                // navigation.navigate("HomePage")
            } else {
                // Handle new device scenario
                // Implement your dismissal logic here (e.g., close modal, navigate back, etc.)
                Alert.alert("Success", "Login successful on a new device");
                setIsLoading(false);
                return "Success";
                // navigation.navigate("HomePage")
            }
        } else {
            if (responseData.code !== "Access_Denied") {
                // Handle login failure
                //START OF LOGIN ATTEMPT CODE
                // Increment login attempts
                let loginAttempts: any = await AsyncStorage.getItem("LoginAttempts");
                // loginAttempts = parseInt(loginAttempts) + 1;
                // await AsyncStorage.setItem("LoginAttempts", loginAttempts.toString());

                // Check if login attempts exceed the limit
                // if (loginAttempts >= 3) {
                //     // Block the user after 3 failed attempts
                //     await BlockUser(PhoneandEmail);

                //     // Send a message using MessagingCenter
                //     Alert.alert(
                //         'Login Attempts Exceeded',
                //         'Too many login attempts. Sorry, your account has been blocked. Please contact support.'
                //     );
                // }
                //END OF LOGIN ATTEMPT CODE

                // Implement your dismissal logic here (e.g., close modal, navigate back, etc.)
                Alert.alert("Login Failed", responseData.reason);
                setIsLoading(false);
                return responseData.reason;
            } else {
                // Handle access denied
                // Implement your dismissal logic here (e.g., close modal, navigate back, etc.)
                Alert.alert("Access Denied", responseData.reason);
                setIsLoading(false);
                return responseData.reason;
            }
        }

        setIsLoading(false); // Simulated API call delay of 2 seconds
        //#endregion login logic
    } catch (error) {
        setIsLoading(false);
        return `Error during login:", ${error}`;
    }
};
