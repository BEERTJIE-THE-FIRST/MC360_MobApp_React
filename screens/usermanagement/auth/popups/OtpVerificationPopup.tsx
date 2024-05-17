import React, {useState, useRef, useEffect} from "react";
import {View, Text, ActivityIndicator, StyleSheet, Alert} from "react-native";
import ButtonCancel from "../../../components/button_Cancel";
import OTPOrPasscodeInput from "../../../components/otp_Or_Passcode_Input";
import NetInfo from "@react-native-community/netinfo";
import CustomButton from "../../../components/button";
import RegisterNewDevice from "../../../services/RegisterNewDeviceService";

export default function OtpVerificationPopup({onClose, setModalVisible, navigation}: any) {
    const [focused, setFocused] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
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

    async function handleSubmit(): Promise<void> {
        setIsLoading(true);
        try {
            const result = await RegisterNewDevice(codeInputs);
            if (result != null) {
                setIsLoading(false);
                navigation.navigate("AppDrawer", {
                    screen: "Home",
                    user: result.user,
                });
                setModalVisible(onClose);
            }
        } catch (error) {
            console.error("Error handling submit:", error);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Please enter the OTP that was sent to your email.</Text>

            <View style={styles.pinContainer}>
                <OTPOrPasscodeInput setCodeInputs={setCodeInputs} />
            </View>

            {isLoading && <ActivityIndicator color="#134F6F" />}

            <CustomButton onPress={handleSubmit} name={"Submit"} color={undefined} disabled={isLoading} />
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
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
});
