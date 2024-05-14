import React, { useState } from "react";
import {
  View,
  ScrollView,
  Text,
  Image,
  TextInput,
  Button,
  ActivityIndicator,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import AuthenticationTextInput from "../../../components/textInput";

export default function RegisterScreen({ navigation }: any) {
  const [focused, setFocused] = useState(false);
  const [focusedNumber, setFocusedNumber] = useState(false);

  const handleFocus = (arg: string) => {
    arg === "number" ? setFocusedNumber(!focusedNumber) : setFocused(!focused);
  };

  const handleBlur = (arg: string) => {
    arg === "number" ? setFocusedNumber(!focusedNumber) : setFocused(!focused);
  };

  function Cont1_Button(): void {
    navigation.navigate("OTPScreen");
  }

  function GoBack(): void {
    navigation.navigate("AuthenticationScreen");
  }

  return (
    <ImageBackground
      style={styles.container}
      source={require("../../../assets/backgroundmicash.png")}
    >
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Image
          source={require("../../../assets/Group2149.png")}
          style={styles.image}
        />

        <Text style={styles.infoText}>
          Please supply the following information to register as a new user
        </Text>

        <Text style={styles.label}>Enter mobile number</Text>
        <AuthenticationTextInput
          placeholder="Required*"
          keyboardType="numeric"
          maxLength={10}
          value={""}
          onChangeText={function (text: string): void {
            throw new Error("Function not implemented.");
          }}
          onBlur={() => handleBlur("number")}
          onFocus={() => handleFocus("number")}
          focused={focusedNumber}
        />

        <Text style={styles.label}>Enter Email Address</Text>
        <AuthenticationTextInput
          placeholder="Required*"
          keyboardType="email-address"
          value={""}
          onChangeText={function (text: string): void {
            throw new Error("Function not implemented.");
          }}
          onBlur={() => handleBlur("email")}
          onFocus={() => handleFocus("email")}
          focused={focused}
        />

        <TouchableOpacity onPress={() => Cont1_Button()} style={styles.button}>
          <Text style={styles.button_text}>Continue</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => GoBack()} style={styles.button_back}>
          <Text style={styles.button_text_back}>Cancel</Text>
        </TouchableOpacity>

        <ActivityIndicator color="#354A87" style={styles.activityIndicator} />
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 5,
    paddingHorizontal: 5,
  },
  header: {
    backgroundColor: "#354A87",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  headerText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
  logo: {
    height: 50,
    resizeMode: "contain",
    marginRight: 20,
  },
  scrollViewContent: {
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
    marginTop: 35,
    alignSelf: "center",
  },
  infoText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#354A87",
    textAlign: "center",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: "#354A87",
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 20,
  },
  activityIndicator: {
    marginBottom: 20,
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
