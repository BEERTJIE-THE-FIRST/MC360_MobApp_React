import React, {useState, useRef, useEffect} from "react";
import {
    View,
    Text,
    ActivityIndicator,
    StyleSheet,
    Alert,
    TextInput,
    Pressable,
    TouchableOpacity,
    Modal,
} from "react-native";
import NetInfo from "@react-native-community/netinfo";
import {ApiPocket} from "../../models/ApiPocket";

type Props = {
    setTitle: React.Dispatch<React.SetStateAction<string>>;
    onClose: boolean;
    setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
    data?: ApiPocket;
    pockets?: ApiPocket[];
    openModal: boolean;
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function OptionsForWalletPocket({
    setModalVisible,
    openModal,
    setOpenModal,
    setTitle,
    data,
    pockets,
}: Props) {
    const [focused, setFocused] = useState(false);

    // const navigation = useNavigation();

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

    async function handleTouchableEvent(arg: any) {
        switch (arg) {
            case "Edit":
                setTitle(arg);
                setOpenModal(!openModal);
                setModalVisible(false);
                break;
            case "Transfer Funds":
                setTitle(arg);
                setOpenModal(!openModal);
                setModalVisible(false);
                break;
            case "Delete Pocket":
                Alert.alert(
                    "Delete Pocket!",
                    `You are about to delete ${data.Name} pocket. Are you sure you want to delete this pocket`,
                    [{text: "NO"}, {text: "YES"}]
                );
                break;
            default:
                setModalVisible(false);
                break;
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Options For Wallet Pocket</Text>

            <TouchableOpacity onPress={() => handleTouchableEvent("Edit")} style={{alignSelf: "flex-start"}}>
                <Text>Edit Name</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleTouchableEvent("Transfer Funds")} style={styles.touchableTexts}>
                <Text>Transfer Funds</Text>
            </TouchableOpacity>
            {!data.isMain && (
                <TouchableOpacity onPress={() => handleTouchableEvent("Delete Pocket")} style={styles.touchableTexts}>
                    <Text>Delete Pocket</Text>
                </TouchableOpacity>
            )}

            <TouchableOpacity onPress={() => handleTouchableEvent("CANCEL")} style={{alignSelf: "flex-end"}}>
                <Text style={{color: "red"}}>CANCEL</Text>
            </TouchableOpacity>
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
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#354A87",
    },
    touchableTexts: {
        marginTop: 20,
        alignSelf: "flex-start",
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        // alignItems: 'center',
        marginTop: 22,
    },
});
