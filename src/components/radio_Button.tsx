// App.js

import React, {useState} from "react";
import {View, Text, StyleSheet} from "react-native";
import {RadioButton} from "react-native-paper";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "#F5F5F5",
        justifyContent: "center",
        alignItems: "center",
    },
    radioButton: {
        flexDirection: "row",
        alignItems: "center",
    },
    radioLabel: {
        marginLeft: 8,
        fontSize: 16,
        color: "#007BFF",
        fontWeight:'bold'
    },
});

const RadioButtonInput = ({status, value, onPress, label, radio_color, color }:any) => {

    return (
        <View style={styles.container}>
            <View style={styles.radioButton}>
                <RadioButton.Android
                    value={value}
                    status={status}
                    onPress={onPress}
                    color={radio_color}
                />
                <Text style={[styles.radioLabel, {color: color}]}>{label}</Text>
            </View>

            {/* <View style={styles.radioButton}>
                <RadioButton.Android
                    value="option2"
                    status={selectedValue === "option2" ? "checked" : "unchecked"}
                    onPress={() => setSelectedValue("option2")}
                    color="#007BFF"
                />
                <Text style={styles.radioLabel}>NextJs</Text>
            </View>

            <View style={styles.radioButton}>
                <RadioButton.Android
                    value="option3"
                    status={selectedValue === "option3" ? "checked" : "unchecked"}
                    onPress={() => setSelectedValue("option3")}
                    color="#007BFF"
                />
                <Text style={styles.radioLabel}>React Native</Text>
            </View> */}
        </View>
    );
};

export default RadioButtonInput;
