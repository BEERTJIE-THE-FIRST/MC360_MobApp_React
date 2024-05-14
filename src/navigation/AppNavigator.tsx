import { Pressable, Text, ImageBackground, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppDrawer from "./AppDrawer";
import AuthenticationScreen from "../screens/usermanagement/auth/authenticationScreen";
import HomeScreen from "../screens/HomeScreen";
import WalletNavigator from "./StackNavigators/WalletStackNavigator";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <ImageBackground
      source={require("../../assets/backgroundmicash.png")}
      style={styles.backgroundImage}
    >
      <Stack.Navigator>
        <Stack.Screen
          name="AppDrawer"
          component={AppDrawer}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Welcome Home",
            headerStyle: { backgroundColor: "#2F3E6B" },
          }}
        />
       
      </Stack.Navigator>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});

export default AppNavigator;
