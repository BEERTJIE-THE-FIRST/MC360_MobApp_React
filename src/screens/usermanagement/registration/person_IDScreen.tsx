import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import RadioButtonInput from "../../../components/radio_Button";
import AuthenticationTextInput from "../../../components/textInput";
import ButtonCancel from "../../../components/button_Cancel";
import Button from "../../../components/button";

const PersonIdPage = () => {
  const [selectedDocType, setSelectedDocType] = useState("saID");
  const [saIdOrPass, setSaIdOrPass] = useState("");

  const handleDocTypeChange = (docType: any) => {
    setSelectedDocType(docType);
  };

  const handleInputChange = (value: any) => {
    setSaIdOrPass(value);
  };

  const handleContinue = () => {
    // Add your logic for continue button click here
  };

  const handleBack = () => {
    // Add your logic for back button click here
  };

  return (
    <ImageBackground
      style={styles.container}
      source={require("../../../assets/backgroundmicash.png")}
    >
      <View style={styles.content}>
        <Text style={styles.infoText}>
          To protect all MiCash360 users and to comply with FICA regulations,
          your identity details will be independently verified
        </Text>
        <Text style={styles.label}>Identification Document</Text>
        <View style={styles.radioContainer}>
          <RadioButtonInput
            status={selectedDocType === "saID" ? "checked" : "unchecked"}
            value={"saID"}
            onPress={() => handleDocTypeChange("saID")}
            label={"South African"}
            radio_color={"#007BFF"}
            color={"#354A87"}
          />

          <RadioButtonInput
            status={selectedDocType === "passport" ? "checked" : "unchecked"}
            value={"passport"}
            onPress={() => handleDocTypeChange("passport")}
            label={"Passport"}
            radio_color={"#007BFF"}
            color={"#354A87"}
          />
        </View>
        <Text style={styles.label}>Enter ID Number</Text>
        {/* <TextInput
                    style={styles.input}
                    placeholder="Required*"
                    placeholderTextColor="#878A8D"
                    onChangeText={handleInputChange}
                    value={saIdOrPass}
                    keyboardType="numeric"
                /> */}
        <AuthenticationTextInput
          placeholder={"Required*"}
          value={""}
          onChangeText={handleInputChange}
          keyboardType={selectedDocType === "saID" ? "numeric" : "default"}
        />

        {/* <TouchableOpacity style={styles.button} onPress={handleContinue}>
                    <Text style={styles.buttonText}>Continue</Text>
                </TouchableOpacity> */}

        <Button
          onPress={handleContinue}
          name={"Continue"}
          color={undefined}
          disabled={false}
        />
        {/* <TouchableOpacity style={styles.button} onPress={handleBack}>
                    <Text style={styles.buttonText}>Back</Text>
                </TouchableOpacity> */}
        <ButtonCancel onPress={handleBack} name={"Back"} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  header: {
    backgroundColor: "#354A87",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  headerText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  content: {
    padding: 10,
  },
  infoText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#354A87",
    textAlign: "center",
    marginBottom: 10,
  },
  label: {
    fontSize: 20,
    color: "#354A87",
    marginTop: 10,
    marginBottom: 15,
    textAlign: "center",
  },
  radioContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  radioLabel: {
    backgroundColor: "pink",
    fontSize: 18,
    color: "#354A87",
  },
  input: {
    borderWidth: 1,
    borderColor: "#354A87",
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    color: "#2E84C5",
  },
  button: {
    backgroundColor: "#354A87",
    borderRadius: 10,
    paddingVertical: 15,
    marginTop: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default PersonIdPage;
