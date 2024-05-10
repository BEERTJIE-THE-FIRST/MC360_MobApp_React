import "react-native-gesture-handler";
import {Pressable, Text, Image, View, TouchableOpacity, ImageBackground, StyleSheet} from "react-native";
import {createDrawerNavigator, DrawerContentScrollView, DrawerItemList} from "@react-navigation/drawer";
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";

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
            screenOptions={{
                drawerActiveTintColor: "#fff",
                drawerActiveBackgroundColor: "#2F3E6B",
                drawerContentStyle: {
                    backgroundColor: "red",
                    color:"#2F3E6B"
                },
                headerStyle: {backgroundColor: "#2F3E6B"},
            }}
        >
            <Drawer.Screen
                name="Home"
                component={HomeScreen}
                options={({navigation}) => ({
                    // Destructure navigation here
                    title: "",
                    drawerLabel: "Home",
                    headerRight: () => (
                        <Pressable onPress={() => alert("Menu button pressed!")}>
                            <Text style={{color: "#fff", fontSize: 13, marginRight: 10}}>
                                Current Balance: R1000.25
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
            <Drawer.Screen name="Settings" component={SettingsScreen} options={{}} />
        </Drawer.Navigator>
    );
}
const styles = StyleSheet.create({
    imageBackground: {
        flex: 1,
        // width: 100,
        height: 158, // Adjust the height as needed
        // marginBottom: 10,
        margin: 15,
    },
});
