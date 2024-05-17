import React from "react";
import { Pressable, Text, Image, View, TouchableOpacity, ImageBackground, StyleSheet } from "react-native";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import HomeScreen from "./screens/HomeScreen";
import PocketManagerScreen from "./screens/pocketManagement/PocketManagerScreen";
import GetPaidPage1 from "./screens/GetPaid/GetPaidPage1";
import GetPaidViewDetails from "./screens/GetPaid/GetPaidViewDetails";
//import listStaticPaymentRequest from "./screens/GetPaid/listStaticPaymentRequest";
import HistoryPage from "./screens/history/HistoryPage";

const Drawer = createDrawerNavigator();

const MicashImage = require("./assets/Micash360.png");

export const CustomDrawerContent = (props) => {
    return (
        <DrawerContentScrollView {...props}>
            <ImageBackground
                source={require("./assets/Group2145.png")} // Adjust the image path
                style={styles.imageBackground}
            />
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
};

export default function AppDrawer() {
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
                        <Text style={{ color: "#fff", fontSize: 13, marginRight: 10 }}>Current Balance: R1000.13</Text>
                    </Pressable>
                ),
                headerLeft: () => (
                    <View style={{ flexDirection: "row", alignItems: "center", marginLeft: 10, gap: 5 }}>
                        <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={{ marginLeft: 10 }}>
                            <Text style={{ color: "#fff", fontSize: 30 }}>☰</Text>
                        </TouchableOpacity>
                        <Image source={MicashImage} style={{ width: 76, height: 17, marginLeft: 10 }} />
                    </View>
                ),
            })}
        >
            <Drawer.Screen name="Home" component={HomeScreen} options={{ drawerLabel: "Home", title: "" }} />
            <Drawer.Screen name="PocketManager" component={PocketManagerScreen} options={{ drawerLabel: () => null, drawerItemStyle: { height: 0 } }} />
            <Drawer.Screen 
                name="GetPaid" 
                component={GetPaidPage1} 
                options={({navigation}) => ({
                    // Destructure navigation here
                    title: "",
                    drawerLabel: "GetPaid",
                    drawerItemStyle: { height: 0 }, // Move this line here
                    headerTitleStyle: { color: "#ffffff" },
                    headerRight: () => (
                        <Pressable onPress={() => ("Menu button pressed!")}>
                            <Text style={{color: "#fff", fontSize: 13, marginRight: 10}}>
                                Current Balance: R1000.13
                            </Text>
                            
                        </Pressable>
                    ),
                    headerLeft: () => (
                        <View style={{flexDirection: "row", alignItems: "center", marginLeft: 10, gap: 5}}>
                        <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={{marginLeft: 10}}>
                            <Text style={{color: "#fff", fontSize: 30}}>☰</Text>
                        </TouchableOpacity>
                        <Image source={MicashImage} style={{width: 76, height: 17, marginLeft: 10}} />
                    </View>
                    ),
                })}
            />
            <Drawer.Screen 
                name="History" 
                component={HistoryPage} 
                options={({navigation}) => ({
                    // Destructure navigation here
                    title: "",
                    drawerLabel: "history",
                    drawerItemStyle: { height: 0 }, // Move this line here
                    headerTitleStyle: { color: "#ffffff" },
                    headerRight: () => (
                        <Pressable onPress={() => ("Menu button pressed!")}>
                            <Text style={{color: "#fff", fontSize: 13, marginRight: 10}}>
                                Current Balance: R1000.13
                            </Text>
                        </Pressable>
                    ),
                    headerLeft: () => (
                        <View style={{flexDirection: "row", alignItems: "center", justifyContent:"space-between", marginLeft: 10, gap: 5}}>
                            <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={{marginLeft: 10}}>
                                <Text style={{color: "#fff", fontSize: 30}}>☰
                                <Image source={MicashImage} style={{width: 76, height: 17, marginLeft: 10 }} /></Text>
                            </TouchableOpacity>
                        </View>
                    ),
                })}
            />
            <Drawer.Screen 
                name="GetPaidViewDetails" 
                component={GetPaidViewDetails} 
                options={({navigation}) => ({
                    // Destructure navigation here
                    title: "",
                    drawerLabel: "GetPaidViewdetails",
                    headerTitleStyle: { color: "#ffffff" },
                    drawerItemStyle: { height: 0 }, // Move this line here
                    headerRight: () => (
                        <Pressable onPress={() => ("Menu button pressed!")}>
                            <Text style={{color: "#fff", fontSize: 13, marginRight: 10}}>
                                Current Balance: R1000.13
                            </Text>
                        </Pressable>
                    ),
                    headerLeft: () => (
                        <View style={{flexDirection: "row", alignItems: "center", marginLeft: 10, gap: 5}}>
                            <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={{marginLeft: 10}}>
                                <Text style={{color: "#fff", fontSize: 30}}>☰</Text>
                            </TouchableOpacity>
                            <Image source={MicashImage} style={{width: 76, height: 17, marginLeft: 10}} />
                        </View>
                    ),
                })}
            />
            {/* <Drawer.Screen 
                name="listStaticPaymentRequest" 
                component={listStaticPaymentRequest} 
                options={({navigation}) => ({
                    title: "",
                    drawerLabel: "listStaticPaymentRequest",
                    headerTitleStyle: { color: "#ffffff" },
                    drawerItemStyle: { height: 0 }, // Move this line here
                    headerRight: () => (
                        <Pressable onPress={() => ("Menu button pressed!")}>
                            <Text style={{color: "#fff", fontSize: 13, marginRight: 10}}>
                                Current Balance: R1000.13
                            </Text>
                        </Pressable>
                    ),
                    headerLeft: () => (
                        <View style={{flexDirection: "row", alignItems: "center", marginLeft: 10, gap: 5}}>
                            <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={{marginLeft: 10}}>
                                <Text style={{color: "#fff", fontSize: 30}}>☰</Text>
                            </TouchableOpacity>
                            <Image source={MicashImage} style={{width: 76, height: 17, marginLeft: 10}} />
                        </View>
                    ),
                })}
            /> */}
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
