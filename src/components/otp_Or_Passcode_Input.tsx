import React, { useState, useRef, useEffect, createRef } from "react";
import {
  View,
  TextInput,
  TextInputProps,
  TextInputKeyPressEventData,
} from "react-native";

interface OTPOrPasscodeInputProps {
  setCodeInputs: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function OTPOrPasscodeInput({
  setCodeInputs,
}: OTPOrPasscodeInputProps) {
  const [codes, setCodes] = useState<string[]>(["", "", "", "", ""]);
  const inputsRefs = useRef<any[]>([]);

  useEffect(() => {
    // Initialize the array with refs for each input
    inputsRefs.current = Array.from(
      { length: 5 },
      (_, i) => inputsRefs.current[i] || createRef<TextInput>()
    );
  }, []);

  const handleChange = (value: string, index: number) => {
    const newCodes = [...codes];
    newCodes[index] = value;
    setCodes(newCodes);

    // Call the callback function with the updated codes
    setCodeInputs(newCodes);
  };

  const focusNextInput = (index: number): void => {
    if (inputsRefs.current[index + 1]) {
      inputsRefs.current[index + 1].focus();
    }
  };

  return (
    <View
      style={{
        flexDirection: "row",
        alignSelf: "center",
        justifyContent: "center",
      }}
    >
      {codes.map((code, index) => (
        <TextInput
          key={index}
          ref={(ref) => (inputsRefs.current[index] = ref as TextInput)}
          style={{
            borderWidth: 1,
            borderColor: "black",
            borderRadius: 20,
            width: 50,
            height: 80,
            fontSize: 20,
            textAlign: "center",
            color: "black",
            marginRight: 10,
          }}
          maxLength={1}
          keyboardType="numeric"
          placeholder="*"
          placeholderTextColor="#59000000"
          value={code}
          onChangeText={(text) => handleChange(text, index)}
          onKeyPress={({
            nativeEvent,
          }: {
            nativeEvent: TextInputKeyPressEventData;
          }) => {
            if (nativeEvent.key === "Backspace" && index > 0) {
              // Move focus to the previous input when Backspace is pressed
              inputsRefs.current[index - 1].focus();
            } else if (nativeEvent.key >= "0" && nativeEvent.key <= "9") {
              // Move focus to the next input when a digit is entered
              focusNextInput(index);
            }
          }}
        />
      ))}
    </View>
  );
}
