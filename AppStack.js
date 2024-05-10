import { Pressable, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import AuthenticationScreen from "./screens/usermanagement/auth/authenticationScreen"
import AppDrawer from "./AppDrawer";

const Stack = createNativeStackNavigator();

export const AboutStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Authentication"
        component={AuthenticationScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="AppDrawer" component={AppDrawer} options={{headerShown: false}}/>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Welcome Home",
          headerStyle:{backgroundColor:'#2F3E6B'}
        }}
      />
      <Stack.Screen
        name="About"
        component={AboutScreen}
        initialParams={{
          name: "Guest",
        }}
        options={({ route }) => ({
          title: route.params.name,
        })}
      />
    </Stack.Navigator>
  );
};

export default function MyStack() {
  return (
    <NavigationContainer>
      <AboutStack />
    </NavigationContainer>
  );
}
