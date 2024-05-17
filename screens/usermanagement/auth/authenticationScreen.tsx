import React, { useState } from "react";
import {
    View,
    ScrollView,
    Text,
    Image,
    Button,
    TouchableOpacity,
    ActivityIndicator,
    StyleSheet,
    ImageBackground,
    Modal,
    Alert,
    Pressable,
} from "react-native";
import LoginPopup from "./popups/login_Popup";
import * as LocalAuthentication from 'expo-local-authentication';
import * as SecureStore from 'expo-secure-store';
import axios from 'axios';
import { AuthLogin } from "../../../environments";

export default function AuthenticationScreen({navigation}:any) {
    const [modalVisible, setModalVisible] = useState(false);
    const [isAuthenticating, setIsAuthenticating] = useState(false);
    
    const AuthBtn_Clicked = async () => {
        try {
            const availability = await LocalAuthentication.hasHardwareAsync();
            const authKey = SecureStore.getItem('micashSecriteKey');

            if (authKey !== null || availability) {
                const authResult = await LocalAuthentication.authenticateAsync({
                    promptMessage: 'Fingerprint Required!',
                });

                if (authResult.success) {
                    setIsAuthenticating(true);

                    const loginResponse = await AuthLogin(); // Await the authLogin call

                    setIsAuthenticating(false);

                    if (loginResponse.success) {
                        navigation.navigate('AppDrawer', { screen: 'Home' });
                    } else {
                        Alert.alert('Error', loginResponse.reason, [{ text: 'Ok' }]);
                    }
                }
            }
        } catch (error) {
            console.error('Authentication error:', error);
            Alert.alert('Error', 'An error occurred during authentication.', [{ text: 'Ok' }]);
        } finally {
            setIsAuthenticating(false);
        }
    };

    function Login_Clicked(): void {
        setModalVisible(true);
        // navigation.navigate('AppDrawer', { screen: 'Home' });
    }

    const ForgotDetails_Clicked = () => {
        // Navigate to the forgot details screen
        navigation.navigate("Forgot_Details_Screen");
    };

    function Register_Clicked(): void {
        navigation.navigate("Register_a_user");
    }

    return (
        <ImageBackground
            style={styles.container}
            source={require("../../../assets/backgroundmicash.png")}
        >
            {/* <Image source={require('./assets/backgroundmicash.png')} style={styles.backgroundImage} /> */}

            <View style={styles.textContent}>
                <Image
                    source={require("../../../assets/Group2145.png")}
                    style={styles.logo}
                />
                <Text style={styles.title}>Welcome To MiCash360</Text>
                <Text style={styles.subtitle}>Receive mobile payments</Text>
                <Text style={styles.description}>
                    Receive mobile payments from any South African bank's Masterpass application, Vodapay, Nedbank
                    Money, FNB scan-to Pay or other MiCash users
                </Text>
            </View>

            {/* <ActivityIndicator color="#2F3E6B" style={styles.activityIndicator} /> */}

            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => Login_Clicked()}>
                    <Image
                        source={require("../../../assets/Group2147.png")}
                        style={[{ height: 105, resizeMode: "contain"}, styles.button]}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => AuthBtn_Clicked()}>
                    <Image
                        source={require("../../../assets/Group2144.png")}
                        style={[{width: 365, height: 55, resizeMode: "contain"}, styles.button]}
                    />
                </TouchableOpacity>

                <View style={styles.forgotDetailsAndRegister}>
                    <TouchableOpacity onPress={() => ForgotDetails_Clicked()}>
                        <Text style={styles.forgotDetailsAndRegister_text}>Forgot Details</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Register_Clicked()}>
                        <Text style={styles.forgotDetailsAndRegister_text}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <LoginPopup onClose={!modalVisible} setModalVisible={setModalVisible} navigation={navigation}/>
                </View>
            </Modal>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textContent: {
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center",
        // paddingTop: 20, // Adjust this value as needed
        // paddingBottom: 20, // Adjust this value as needed
    },
    logo: {
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#2F3E6B",
        textAlign: "center",
    },
    subtitle: {
        fontSize: 20,
        color: "black",
        textAlign: "center",
        // marginBottom: 10,
    },
    description: {
        fontSize: 16,
        color: "#2F3E6B",
        marginHorizontal: 36,
        // marginBottom: 20,
        textAlign: "center",
    },
    buttonContainer: {
        flexGrow: 2,
    },
    imageButton: {},
    forgotDetailsAndRegister: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 30,
    },
    forgotDetailsAndRegister_text: {
        fontWeight: "bold",
        color: "#2F3E6B",
    },


    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        // alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 1,
      },
      buttonOpen: {
        backgroundColor: '#F194FF',
      },
      buttonClose: {
        backgroundColor: '#2196F3',
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },
      button: {
        alignSelf:'center',
        borderRadius: 20,
        // padding: 10,
      },
});
