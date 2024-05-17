import React, {useState, useRef} from "react";
import {View, Text, TextInput, ActivityIndicator, StyleSheet, TouchableOpacity} from "react-native";

export default function Button({onPress, name, color, disabled}) {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, color && {backgroundColor: color, borderRadius:5}]} disabled = {disabled}>
            <Text style={styles.button_text}>{name}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#354A87",
        // paddingLeft:90,
        // paddingRight:90,
        // paddingBottom:15,
        // paddingTop:15,
        marginVertical: 5,
        padding: 10,
        borderRadius: 5,
    },
    button_text: {
        textAlign: "center",
        color: "#ffffff",
        fontSize: 25,
        fontWeight: "600",
    },
});
