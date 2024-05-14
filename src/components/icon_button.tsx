import React, {useState, useRef} from "react";
import {View, Text, TextInput, ActivityIndicator, StyleSheet, TouchableOpacity, Image, ImageSourcePropType, GestureResponderEvent} from "react-native";

type Props= {
    onPress: (event: GestureResponderEvent) => void
    name: string
    color: string
    disabled: boolean
    image: ImageSourcePropType
}

export default function IconButton({onPress, name, color, disabled, image}:Props) {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, color && {backgroundColor: color}]} disabled = {disabled}>
            <Image source={image} style={{width:25, height:25}}/><Text style={styles.button_text}>{name}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor: "#354A87",
        marginVertical: 5,
        padding: 10,
        borderRadius: 5,
    },
    button_text: {
        textAlign: "center",
        color: "#ffffff",
        marginLeft:10,
    },
});
