import React from "react";
import {TextInput, StyleSheet, KeyboardTypeOptions, NativeSyntheticEvent, TextInputFocusEventData} from "react-native";
// (arg: string) => void
type TextIputAttributes = {
    onFocus?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
    onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
    focused?:boolean;
    placeholder: string;
    keyboardType?: KeyboardTypeOptions;
    maxLength?: number;
    value: string;
    onChangeText: (text: string) => void
}

const AuthenticationTextInput = ({onFocus, onBlur, focused, placeholder, keyboardType, maxLength, value, onChangeText}:TextIputAttributes) => {
    return (
        <TextInput
            style={[styles.input, focused && styles.focusedInput]}
            onFocus={onFocus}
            onBlur={onBlur}
            keyboardType={keyboardType}
            placeholder={placeholder}
            placeholderTextColor="#878A8D"
            maxLength={maxLength}
            value={value}
            onChangeText={onChangeText}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        // width: "100%",
        // height: 40,
        borderColor: "#878A8D",
        // borderRadius: 5,
        textAlign:'center',
        // padding: 2,
        marginBottom: 20,
        borderBottomWidth: 3,
    },
    focusedInput: {
        borderColor: "#354A87",
    },
});

export default AuthenticationTextInput;
