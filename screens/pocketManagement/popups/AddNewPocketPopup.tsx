import React, {useState, useRef, useEffect} from "react";
import {View, Text, ActivityIndicator, StyleSheet, Alert, TextInput} from "react-native";
import AuthenticationTextInput from "../../components/textInput";
import ButtonCancel from "../../components/button_Cancel";
import NetInfo from "@react-native-community/netinfo";
import CustomButton from "../../components/button";
import { Picker } from "@react-native-picker/picker";

export default function AddNewPocketPopup({onClose, setModalVisible, navigation, title, name}: any) {
    const [focused, setFocused] = useState(false);
    const [pocketName, setPocketName] = useState(name ? name : "");
    const [amount, setAmount] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedValue, setSelectedValue] = useState(name);

    const handleFocus = () => {
        setFocused(!focused);
    };

    const handleBlur = () => {
        setFocused(!focused);
    };

    useEffect(() => {
        // Subscribe to internet connection changes
        const unsubscribe = NetInfo.addEventListener((state) => {
            if (state.isConnected === false) {
                Alert.alert("No Internet", "Please check your internet connection");
            }
        });

        return () => {
            // Clean up subscriptions
            unsubscribe();
        };
    }, []);

    async function handleAddPocket() {
        setModalVisible(onClose);
    }

    return (
        <View style={styles.container}>
            {title === "Edit" && (
                <View>
                    <Text style={styles.title}>
                        {title === "Edit" ? `${title} ${name}` : title === "Transfer Funds" ? title : ""}
                    </Text>

                    <AuthenticationTextInput
                        placeholder="Enter Phone/Email"
                        keyboardType="default"
                        value={pocketName}
                        onChangeText={setPocketName}
                        onBlur={handleBlur}
                        onFocus={handleFocus}
                        focused={focused}
                    />

                    {isLoading && <ActivityIndicator color="#134F6F" />}

                    <CustomButton onPress={handleAddPocket} name={"Save"} color={undefined} disabled={isLoading} />
                    <ButtonCancel onPress={() => setModalVisible(onClose)} name={"Cancel"} />
                </View>
            )}
            {title === "Transfer Funds" && (
                <View>
                    <Text style={styles.title}>
                        {title === "Edit" ? `${title} ${name}` : title === "Transfer Funds" ? name : ""}
                    </Text>

                    <View style={styles.amount}>
                        <Text>Available Amount</Text>
                        <Text>R4.92</Text>
                    </View>

                    <Text style={styles.label}>Transfer Amount</Text>
                    <AuthenticationTextInput
                        placeholder="Enter Amount"
                        keyboardType="numeric"
                        value={amount}
                        onChangeText={setAmount}
                        onBlur={handleBlur}
                        onFocus={handleFocus}
                        focused={focused}
                    />

                    <Text style={styles.label}>Transfer To</Text>

                    <Picker
                        selectedValue={selectedValue}
                        style={{height: 50, width: 150}}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item label={name} value={name} />
                        <Picker.Item label="JavaScript" value="javascript" />
                        <Picker.Item label="Python" value="python" />
                        <Picker.Item label="C++" value="cpp" />
                    </Picker>

                    {isLoading && <ActivityIndicator color="#134F6F" />}

                    <CustomButton onPress={handleAddPocket} name={"Save"} color={undefined} disabled={isLoading} />
                    <ButtonCancel onPress={() => setModalVisible(onClose)} name={"Cancel"} />
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 26,
        backgroundColor: "#DCDCDC",
        borderRadius: 10,
        marginLeft: 25,
        marginRight: 25,
    },
    title: {
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#354A87",
    },
    amount: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    label: {
        marginBottom: 20,
    },
});
