import React from "react";
import {Pressable, Text, Image, View, TouchableOpacity, ImageBackground, StyleSheet} from "react-native";
import {createDrawerNavigator, DrawerContentScrollView, DrawerItemList} from "@react-navigation/drawer";
import HomeScreen from "../HomeScreen";
import PocketManagerScreen from "../pocketManagement/PocketManagerScreen";
import AppTab from "./AppTab";

const Drawer = createDrawerNavigator();

export const CustomDrawerContent = (props:any) => {
    return (
        <DrawerContentScrollView {...props}>
            <ImageBackground
                source={require("../../assets/Group2145.png")} // Adjust the image path
                style={styles.imageBackground}
            />
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
};

export default function AppDrawer({ navigation, route }: any) {
    // Access the user parameter from the route.params object
    const { user } = route.params || {};

    return (
        <Drawer.Navigator
            initialRouteName="Home"
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={({ navigation }) => ({
                drawerActiveTintColor: "#fff",
                drawerActiveBackgroundColor: "#2F3E6B",
                drawerContentStyle: {
                    backgroundColor: "red",
                    color: "#2F3E6B",
                },
                headerStyle: { backgroundColor: "#2F3E6B" },
                headerRight: () => (
                    <Pressable onPress={() => alert("Menu button pressed!")}>
                        {/* Access the user amount from the user parameter */}
                        <Text style={{ color: "#fff", fontSize: 13, marginRight: 10 }}>Current Balance: R{user?.Amount || 0}</Text>
                    </Pressable>
                ),
                headerLeft: () => (
                    <View style={{ flexDirection: "row", alignItems: "center", marginLeft: 10, gap: 5 }}>
                        <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={{ marginLeft: 10 }}>
                            <Text style={{ color: "#fff", fontSize: 30 }}>☰</Text>
                        </TouchableOpacity>
                        <Image
                            source={require("../../assets/Micash360.png")}
                            style={{ width: 76, height: 17, marginLeft: 10 }}
                        />
                    </View>
                ),
            })}
        >
            <Drawer.Screen name="Home" component={HomeScreen} options={{ drawerLabel: "Home", title: "" }} />
            <Drawer.Screen name="PocketManager" component={PocketManagerScreen} options={{ drawerLabel: () => null, drawerItemStyle: { height: 0 }, title: '' }} />
            <Drawer.Screen name="AppTab" component={AppTab} options={{ drawerLabel: () => null, drawerItemStyle: { height: 0 }, title: '' }} />
        </Drawer.Navigator>
    );
}


const styles = StyleSheet.create({
    imageBackground: {
        flex: 1,
        height: 158, // Adjust the height as needed
        margin: 15,
    },
});
