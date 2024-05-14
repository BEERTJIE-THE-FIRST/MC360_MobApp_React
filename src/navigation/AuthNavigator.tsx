import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ImageBackground, StyleSheet } from "react-native";
import AuthenticationScreen from "../screens/usermanagement/auth/authenticationScreen";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <ImageBackground
      source={require("../../assets/backgroundmicash.png")}
      style={styles.backgroundImage}
    >
      <Stack.Navigator>
        <Stack.Screen
          name="Authentication"
          component={AuthenticationScreen}
          options={{ headerShown: false }}
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

export default AuthNavigator;
