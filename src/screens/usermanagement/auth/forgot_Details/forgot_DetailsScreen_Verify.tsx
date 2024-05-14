import React, { useState, useRef } from "react";
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Button from "../../../../components/button";
import ButtonCancel from "../../../../components/button_Cancel";
import OTPOrPasscodeInput from "../../../../components/otp_Or_Passcode_Input";

export default function ForgotDetailsPage_Verify({ navigation }: any) {
  const [otpInputs, setOtpInputs] = useState(["", "", "", "", ""]);
  const refs = useRef([]);

  // const handleChangeText = (index:any, text:any) => {
  //     const newOtpInputs = [...otpInputs];
  //     newOtpInputs[index] = text;
  //     setOtpInputs(newOtpInputs);

  //     // Automatically move focus to the next input
  //     if (text.length === 1 && index < otpInputs.length - 1) {
  //         refs.current[index + 1].focus();
  //     }
  // };

  function Main_send_Clicked(): void {
    throw new Error("Function not implemented.");
  }

  function Main_back_Clicked(): void {
    throw new Error("Function not implemented.");
  }

  function Logback_Clicked(): void {
    navigation.navigate("AuthenticationScreen");
  }

  return (
    <ImageBackground
      style={styles.container}
      source={require("../../../../assets/backgroundmicash.png")}
    >
      {/* <Text style={styles.title}>Forgot Details</Text> */}

      <View style={styles.grid}>
        <Image
          source={require("../../../../assets/Group2149.png")}
          style={styles.image}
        />

        <Text style={styles.header}>Please Enter a new pin</Text>

        <Text style={styles.label}>Enter Reset Pin</Text>

        <OTPOrPasscodeInput setCodeInputs={setOtpInputs} />

        {/* <TouchableOpacity onPress={() => Main_send_Clicked()} style={styles.button}>
                    <Text style={styles.button_text}>Continue</Text>
                </TouchableOpacity> */}
        <Button
          onPress={() => Main_send_Clicked()}
          name={"Continue"}
          color={undefined}
          disabled={false}
        />

        <ActivityIndicator style={styles.activityIndicator} color="#354A87" />

        <ButtonCancel
          onPress={() => Logback_Clicked()}
          name={"Back to Login"}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: "center",
    backgroundColor: "#FFFFFF", // Assuming a default background color
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    backgroundColor: "#354A87",
    padding: 10,
  },
  grid: {
    padding: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
    alignSelf: "center",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#354A87",
    textAlign: "center",
    marginBottom: 20,
  },
  label: {
    fontSize: 15,
    color: "#354A87",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    borderColor: "#ccc",
    backgroundColor: "#f1f1f1f1",
    color: "#354A87",
    fontSize: 20,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    width: "18%",
    height: 65,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#354A87",
    //   paddingLeft:90,
    //   paddingRight:90,
    //   paddingBottom:15,
    //   paddingTop:15,
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  button_text: {
    color: "#ffffff",
    fontSize: 25,
    fontWeight: "600",
    textAlign: "center",
  },
  activityIndicator: {
    marginBottom: 20,
  },
  button_text_back: {
    color: "#354A87",
    fontSize: 20,
    fontWeight: "400",
    //   textAlign:'center'
  },
  button_back: {
    alignSelf: "center",
  },
});
