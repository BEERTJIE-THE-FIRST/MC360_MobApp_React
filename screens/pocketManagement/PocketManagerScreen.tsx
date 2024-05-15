import React, { useState } from "react";
import {View, ScrollView, Text, Image, TouchableOpacity, StyleSheet, Modal} from "react-native";
import Button from "../components/button";
import AddNewPocketPopup from "./popups/AddNewPocketPopup";
import OptionsForWalletPocket from "./popups/OptionsForWalletPocket";

const Pocket_Manager_Page = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);
    
    const [title, setTitle] = useState("");
    const [openModal, setOpenModal] = useState(false);

    const handleAddPocket = () =>{
        setModalVisible(!modalVisible);
    }

    return (
        <View style={styles.container}>
            <View style={styles.toolbar}>
                <Image source={require("../../assets/pocket.png")} style={styles.toolbarIcon} />
                <Text style={styles.toolbarText}>Pocket Manager</Text>
            </View>
            <ScrollView style={styles.scrollView}>
                <View style={styles.pocketList}>
                    {/* Pocket list items */}
                    {/* You can map through your pocket data and render list items here */}
                </View>
            </ScrollView>
            <View style={styles.addButton}>
                <Button onPress={handleAddPocket} name={"Add Pocket"} color={"#354A87"} disabled={undefined} />
            </View>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <OptionsForWalletPocket onClose={!modalVisible} setModalVisible={setModalVisible} navigation={navigation}  setTitle = {setTitle} openModal = {openModal} setOpenModal={setOpenModal}/>
                </View>
            </Modal>
            <Modal
                animationType="fade"
                transparent={true}
                visible={openModal}
                onRequestClose={() => {
                    setOpenModal(!openModal);
                }}
            >
                <View style={styles.centeredView}>
                    <AddNewPocketPopup onClose={!openModal} setModalVisible={setOpenModal} navigation={navigation} title={title} name="Wallet"/>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
    },
    toolbar: {
        flexDirection: "row",
        alignItems: "center",
        // justifyContent: "space-between",
        backgroundColor: "#2F3E6B",
        paddingVertical: 10,
        paddingHorizontal: 20,
        gap:4
    },
    toolbarText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#FFF",
    },
    toolbarIcon: {
        width: 24,
        height: 24,
        tintColor: "#FFF",
    },
    scrollView: {
        flex: 1,
    },
    pocketList: {
        padding: 20,
    },
    addButton: {
        alignSelf: "center",
        marginBottom:5
    },
    addButtonText: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: "bold",
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
        marginTop: 22,
      },
});

export default Pocket_Manager_Page;
