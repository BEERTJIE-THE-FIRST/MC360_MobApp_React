import React, {useEffect, useState} from "react";
import {
    View,
    ScrollView,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    Modal,
    ActivityIndicator,
    FlatList,
} from "react-native";
import Button from "../components/button";
import AddNewPocketPopup from "./popups/AddNewPocketPopup";
import OptionsForWalletPocket from "./popups/OptionsForWalletPocket";
import {ApiPocket, Pockets} from "../models/ApiPocket";
import {getPockets} from "../services/PocketManagementService";

const Pocket_Manager_Page = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [pockets, setPockets] = useState<ApiPocket[]>([]);
    const [pocketData, setPocketData] = useState<ApiPocket>();
    const [pocketInformationVisible, setPocketInformationVisible] = useState(true);

    const [title, setTitle] = useState("");
    const [openModal, setOpenModal] = useState(false);

    const handleAddPocket = () => {
        setPocketData(null);
        setTitle("Add");
        setOpenModal(!modalVisible);
    };

    useEffect(() => {
        // Call getPockets function when component mounts
        GetPockets();
    }, []);

    const GetPockets = async () => {
        setLoading(true);
        const result = await getPockets();

        if (result) {
            setPockets(result);
            setLoading(false);
        }
    };

    const handleOnPress = (item: ApiPocket) => {
        setPocketData(item);
        setModalVisible(!modalVisible);
    };

    const renderPocketItem = ({item}: {item: ApiPocket}) => (
        <TouchableOpacity onPress={() => handleOnPress(item)} style={styles.pocketList}>
            <Text>{item.Name}</Text>
            <Text>R {item.Amount}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.toolbar}>
                <Image source={require("../../assets/pocket.png")} style={styles.toolbarIcon} />
                <Text style={styles.toolbarText}>Pocket Manager</Text>
            </View>
            {loading ? (
                <ActivityIndicator />
            ) : (
                <FlatList data={pockets} renderItem={renderPocketItem} keyExtractor={(item) => item.Id.toString()} />
            )}
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
                    <OptionsForWalletPocket
                        onClose={!modalVisible}
                        setModalVisible={setModalVisible}
                        setTitle={setTitle}
                        openModal={openModal}
                        setOpenModal={setOpenModal}
                        data={pocketData}
                        pockets={pockets}
                    />
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
                    <AddNewPocketPopup
                        onClose={!openModal}
                        setModalVisible={setOpenModal}
                        navigation={navigation}
                        title={title}
                        data={pocketData}
                        pockets={pockets}
                        setPocketData={setPocketData}
                        setPockets={setPockets}
                        setTitle={setTitle}
                    />
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
        gap: 4,
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
        flexDirection: "row",
        justifyContent: "space-between",
    },
    addButton: {
        alignSelf: "center",
        marginBottom: 5,
    },
    addButtonText: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: "bold",
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        // alignItems: 'center',
        marginTop: 22,
    },
});

export default Pocket_Manager_Page;
