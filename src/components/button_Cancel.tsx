import React, {useState, useRef} from "react";
import {View, Text, TextInput, ActivityIndicator, StyleSheet, TouchableOpacity} from "react-native";

export default function ButtonCancel({onPress, name}:any) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button_back}>
            <Text style={styles.button_text_back}>{name}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button_text_back: {
        color: "#354A87",
        fontSize: 20,
        fontWeight: "400",
        textAlign: "center",
    },
    button_back:{
        alignSelf:'center'
    }
});
