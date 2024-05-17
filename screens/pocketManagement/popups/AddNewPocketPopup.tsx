import React, {useState, useRef, useEffect, useCallback} from "react";
import {View, Text, ActivityIndicator, StyleSheet, Alert, TextInput} from "react-native";
import AuthenticationTextInput from "../../components/textInput";
import ButtonCancel from "../../components/button_Cancel";
import NetInfo from "@react-native-community/netinfo";
import CustomButton from "../../components/button";
import {Picker} from "@react-native-picker/picker";
import {ApiPocket} from "../../models/ApiPocket";
import {AddOrEdit, getPockets} from "../../services/PocketManagementService";
import { useFocusEffect } from "@react-navigation/native";

type Props = {
    onClose: boolean;
    setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
    navigation?: string;
    title?: string;
    data?: ApiPocket;
    pockets?: ApiPocket[];
    setPocketData: React.Dispatch<React.SetStateAction<ApiPocket>>;
    setPockets: React.Dispatch<React.SetStateAction<ApiPocket[]>>;
    setTitle: React.Dispatch<React.SetStateAction<string>>;
};

export default function AddNewPocketPopup({
    onClose,
    setModalVisible,
    navigation,
    title,
    data,
    pockets,
    setPocketData,
    setPockets,
    setTitle
}: Props) {
    const [focused, setFocused] = useState(false);
    const [pocketName, setPocketName] = useState(data ? data.Name : "");
    const [amount, setAmount] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedValue, setSelectedValue] = useState("");

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

    useFocusEffect(
        useCallback(() => {
            getPockets();
        }, [])
    );

    const handleAddOrEditPocket = async () => {
            setPocketName("");
            setTitle("");
        const res = await AddOrEdit(pocketName, data);

        if (!res.success) {
            Alert.alert("Error", res.description, [{text: "Ok"}]);
        } else {
            setPockets((prevPockets: any) => {
                if (data) {
                  // Update existing pocket
                  return prevPockets.map((p: {Id: any}) => (p.Id === data.Id ? {...p, Name: pocketName} : p));
                } else {
                  // Add new pocket
                  const result = getPockets();
                //   setPockets(result);
                }
              });
              
            setModalVisible(false);
        }
    };
    async function handleTransferFunds() {
        setModalVisible(onClose);
    }

    return (
        <View style={styles.container}>
            {(title === "Edit" || title === "Add") && (
                <View>
                    <Text style={styles.title}>{title === "Edit" ? `${title} ${data.Name}` : "Add New Pocket"}</Text>

                    <AuthenticationTextInput
                        placeholder="Enter Phone/Email"
                        keyboardType="default"
                        value={title="Edit"?pocketName:""}
                        onChangeText={setPocketName}
                        onBlur={handleBlur}
                        onFocus={handleFocus}
                        focused={focused}
                    />

                    {isLoading && <ActivityIndicator color="#134F6F" />}

                    <CustomButton
                        onPress={handleAddOrEditPocket}
                        name={"Save"}
                        color={undefined}
                        disabled={isLoading}
                    />
                    <ButtonCancel onPress={() => setModalVisible(onClose)} name={"Cancel"} />
                </View>
            )}
            {title === "Transfer Funds" && (
                <View>
                    <Text style={styles.title}>{data.Name}</Text>

                    <View style={styles.amount}>
                        <Text>Available Amount</Text>
                        <Text>R{data.Amount}</Text>
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
                        {pockets ? (
                            pockets.map((pocket, index) => (
                                <Picker.Item key={index} label={pocket.Name} value={pocket.Name} />
                            ))
                        ) : (
                            <Picker.Item label={"No Pockets"} value={"No_Pockets"} />
                        )}

                        {/* 
                        <Picker.Item label="Python" value="python" />
                        <Picker.Item label="C++" value="cpp" /> */}
                    </Picker>

                    {isLoading && <ActivityIndicator color="#134F6F" />}

                    <CustomButton onPress={handleTransferFunds} name={"Save"} color={undefined} disabled={isLoading} />
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
