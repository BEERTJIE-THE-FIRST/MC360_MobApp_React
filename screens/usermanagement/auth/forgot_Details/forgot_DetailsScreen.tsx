import React, {useState} from "react";
import {View, Text, TextInput, Image, Button, ActivityIndicator, StyleSheet, ImageBackground, TouchableOpacity} from "react-native";
import AuthenticationTextInput from "../../../components/textInput";

export default function ForgotDetailsScreen({navigation}:any) {
    const [focused, setFocused] = useState(false);

    const handleFocus = () => {
        setFocused(true);
    };

    const handleBlur = () => {
        setFocused(false);
    };

    function submit_Clicked(): void {
        navigation.navigate("ForgotDetailsPage_Verify")
    }

    function Logback_Clicked(): void {
        navigation.navigate("AuthenticationScreen")
    }

    return (
        <ImageBackground style={styles.container} source={require('../../../../assets/backgroundmicash.png')}>
            {/* <Text style={styles.title}>Forgot Details</Text> */}

            <Image
                source={require("../../../../assets/Group2149.png")}
                style={styles.image}
            />

            <Text style={styles.subtitle}>Please supply a mobile number or email address to receive a reset code</Text>

            <Text style={styles.label}>Enter mobile number or email</Text>
            {/* <TextInput
                style={[styles.input, focused && styles.focusedInput]}
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder="Mobile number or email"
                placeholderTextColor="#878A8D"
            /> */}
            <AuthenticationTextInput onFocus={handleFocus} onBlur={handleBlur} placeholder="Mobile number or email" focused={focused} keyboardType="default" value={""} onChangeText={function (text: string): void {
                throw new Error("Function not implemented.");
            } }/>

            <TouchableOpacity onPress={() => submit_Clicked()} style={styles.button}><Text style={styles.button_text}>Send</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => Logback_Clicked()} style={styles.button_back}><Text style={styles.button_text_back}>Back to home</Text></TouchableOpacity>

            {/* <ActivityIndicator style={styles.activityIndicator} color="#354A87" /> */}
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        padding: 25,
        // alignItems: "center",
        backgroundColor: "#FFFFFF", // Assuming a default background color
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "white",
        backgroundColor: "#354A87",
        padding: 20,
        marginBottom: 20,
    },
    image: {
        width: 75,
        height: 75,
        marginBottom: 20,
        alignSelf:'center',
    },
    subtitle: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#354A87",
        textAlign: "center",
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        color: "#354A87",
        textAlign: "center",
        marginBottom: 10,
    },
    input: {
        width: "100%",
        // height: 40,
        borderColor: "#878A8D",
        // borderRadius: 5,
        padding: 10,
        marginBottom: 20,
        borderBottomWidth: 3,
    },
    button: {
        backgroundColor:'#354A87',
        // paddingLeft:90,
        // paddingRight:90,
        // paddingBottom:15,
        // paddingTop:15,
        marginVertical: 35,
        borderRadius:5,
        padding:10,
    },
    activityIndicator: {
        marginVertical: 20,
    },
    focusedInput: {
        borderColor: '#354A87', 
      },
      button_text:{
        color:'#ffffff',
        fontSize:25,
        fontWeight:'600',
        textAlign:'center',
      },
      button_text_back:{
        color:'#354A87',
        fontSize:20,
        fontWeight:'400',
        alignSelf:'center',
      },
      button_back:{
        alignSelf:'center'
    }
});
