import React, {useState, useRef} from "react";
import {View, Text, TextInput, ActivityIndicator, StyleSheet, TouchableOpacity} from "react-native";

export default function LogoTitleButton({onPress, title, color}:any) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button_back}>
            <Text style={[styles.button_text_back, {color: color}]}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button_text_back: {
        color: "#354A87",
        fontSize: 12,
        // fontWeight: "400",
        textAlign: "center",
    },
    button_back:{
        alignSelf:'center'
    }
});
