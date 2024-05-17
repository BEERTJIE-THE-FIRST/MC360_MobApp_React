import { Pressable, Text, ImageBackground, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../HomeScreen";
import AuthenticationScreen from "../usermanagement/auth/authenticationScreen";
import AppDrawer from "./AppDrawer";
import AppTab from "./AppTab";

const Stack = createNativeStackNavigator();

export const AppStack = () => {
  return (
    <ImageBackground source={require('../../assets/backgroundmicash.png')} style={styles.backgroundImage}>
      <Stack.Navigator>
        <Stack.Screen
          name="Authentication"
          component={AuthenticationScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="AppDrawer" component={AppDrawer} options={{ headerShown: false }} />
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

export default function MyStack() {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}
