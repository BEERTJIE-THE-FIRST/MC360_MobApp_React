import React from "react";
import {View, ScrollView, Image, TouchableOpacity, StyleSheet, Text} from "react-native";
import IconButton from "./components/icon_button";

const HomePage = () => {
    return (
        <View style={styles.container}>
            {/* Pay Button */}
            <TouchableOpacity onPress={() => "handlePayButtonPress"} style={styles.PayButton}>
                <Image source={require("../assets/Component1541.png")} style={styles.PayButton_image} />
            </TouchableOpacity>

            <View style={styles.Wallet_GetPaid_Container}>
                <TouchableOpacity onPress={() => "handlePayButtonPress"} style={styles.PayButton}>
                    <Image source={require("../assets/WalletButton.png")} style={{flex: 1, aspectRatio: 1}} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => "handlePayButtonPress"} style={styles.PayButton}>
                    <Image source={require("../assets/Component1551.png")} style={{flex: 1, aspectRatio: 1}} />
                </TouchableOpacity>
            </View>
            {/* Middle Logo */}
            <View onPress={() => "handlePayButtonPress"} style={styles.MiddleLogo}>
                <Image source={require("../assets/Component1511.png")} style={{flex: 1, aspectRatio: 1}} />
            </View>

            <View style={styles.History_MyLinks_Container}>
                {/* History Button */}
                <TouchableOpacity onPress={() => "handleHistoryButtonPress"} style={styles.PayButton}>
                    <Image source={require("../assets/Component1571.png")} style={{flex: 1, aspectRatio: 1}} />
                </TouchableOpacity>
                {/* My Links Button */}
                <TouchableOpacity onPress={() => "handleLinksButtonPress"} style={styles.PayButton}>
                    <Image source={require("../assets/Component1581.png")} style={{flex: 1, aspectRatio: 1}} />
                </TouchableOpacity>
            </View>

            {/* Bottom Buttons */}
            <View style={styles.PocketManager_container}>
                <IconButton onPress={()=>""} name={"Pocket Manager"} color={""} disabled={undefined} image={""}/>
            </View>

            <View style={styles.ShowCode_ScanCode}>
                {/* Show Code Action */}
                    <TouchableOpacity onPress={() => "handleShowCodeActionPress"} style={{}}>
                        <Image source={require("../assets/Group2214.png")} style={{flex: 1, aspectRatio: 2}} />
                    </TouchableOpacity>

                    {/* Scan QR Code */}
                    <TouchableOpacity onPress={() => "handleScanQRCodePress"} style={{}}>
                        <Image source={require("../assets/Group2213.png")} style={{flex: 1, aspectRatio: 2}} />
                    </TouchableOpacity>

            </View>
        </View>
    );
};

export default HomePage;

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    PayButton: {
        width: 80,
        height: 80,
        borderRadius: 50,
        marginTop: 25,
        alignSelf: "center",
    },
    PayButton_image: {
        width: 80,
        height: 88,
    },
    MiddleLogo: {
        width: 260,
        height: 260,
        borderRadius: 50,
        alignSelf: "center",
        marginTop: "-38%",
    },

    Wallet_GetPaid_Container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    History_MyLinks_Container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: "-22%",
        paddingHorizontal: 30,
    },
    History: {},
    MyLinks: {},
    BottomButtons: {},
    PocketManager: {
        // display: "flex",
        // flexDirection: "row",
        marginTop: 15,
        paddingHorizontal: 30,
    },

    PocketManager_container:{
        alignItems: "center",
    },
    ShowCode_ScanCode:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: "-22%",
    }
    
});
