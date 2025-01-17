import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AppDrawer from "./AppDrawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          //   tabBarShowLabel: false,
          tabBarLabelPosition: "below-icon",
          tabBarActiveTintColor: "purple",

          
        }}
      >
        <Tab.Screen name="AppDrawer" component={AppDrawer} />
        {/* <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: "My Profile",
            tabBarIcon: () => <Ionicons name={"person"} size={20} />,
            tabBarBadge: 3,
          }}
        /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
