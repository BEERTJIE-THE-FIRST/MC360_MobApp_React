import React, {useState, useRef, useEffect} from "react";
import {View, Text, ActivityIndicator, StyleSheet, Alert, TextInput} from "react-native";
import AuthenticationTextInput from "../../../components/textInput";
import ButtonCancel from "../../../components/button_Cancel";
import OTPOrPasscodeInput from "../../../components/otp_Or_Passcode_Input";
import NetInfo from "@react-native-community/netinfo";
import {loginClicked} from "./Security_Pin_Popup";
import CustomButton from "../../../components/button";
import ApiUserResponse from "../../../models/ApiUserResponse";
import RegisterNewDevice from "../../../services/RegisterNewDeviceService";

export default function LoginPopup({onClose, setModalVisible, navigation}: any) {
    const [focused, setFocused] = useState(false);
    const [phoneOrEmail, setPhoneOrEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [loginAttempts, setLoginAttempts] = useState(0);
    const [codeInputs, setCodeInputs] = useState<Array<string>>([]);

    // const navigation = useNavigation();

    const handleFocus = () => {
        setFocused(!focused);
    };

    const handleBlur = () => {
        setFocused(!focused);
    };

    useEffect(() => {
        // Subscribe to internet connection changes
        const unsubscribe = NetInfo.addEventListener((state) => {
            if (state.isConnected === false) {
                Alert.alert("No Internet", "Please check your internet connection");
            }
        });

        return () => {
            // Clean up subscriptions
            unsubscribe();
        };
    }, []);

    async function handleLogin(): Promise<ApiUserResponse> {
        const loginStatus = await loginClicked(setIsLoading, loginAttempts, phoneOrEmail, codeInputs);

        if (loginStatus != null) {
            if (loginStatus.success) {
                if (!loginStatus.new_device) {
                    setIsLoading(false);
                    return navigation.navigate("AppDrawer", {screen: "Home"});
                }else{
                    return await RegisterNewDevice();
                }
            }
        }

        // if (loginStatus === "Success") {
        //     setModalVisible(onClose);
        //     navigation.navigate('AppDrawer', { screen: 'Home' });

        // }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Please enter your login details.</Text>

            <AuthenticationTextInput
                placeholder="Enter Phone/Email"
                keyboardType="email-address"
                value={phoneOrEmail}
                onChangeText={setPhoneOrEmail}
                onBlur={handleBlur}
                onFocus={handleFocus}
                focused={focused}
            />

            <View style={styles.pinContainer}>
                <OTPOrPasscodeInput setCodeInputs={setCodeInputs} />
            </View>

            {isLoading && <ActivityIndicator color="#134F6F" />}

            <CustomButton onPress={handleLogin} name={"Login"} color={undefined} disabled={isLoading} />
            <ButtonCancel onPress={() => setModalVisible(onClose)} name={"Cancel"} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 26,
        backgroundColor: "#DCDCDC",
        borderRadius: 10,
        marginLeft: 25,
        marginRight: 25,
    },
    title: {
        textAlign: "center",
        fontSize: 16,
        marginBottom: 20,
        color: "#354A87",
    },
    pinContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
    },
});
