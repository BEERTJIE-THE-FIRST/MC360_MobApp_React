import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PayOrBuyScreen from "../payOrBuy/PayOrBuy";
import GetPaidScreen from "../getPaid/GetPaid";
import HistoryScreen from "../History";
import MyLinksScreen from "../MyLinks";
import TransactionsScreen from "../Transactions";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons from Expo

const Tab = createBottomTabNavigator();

export default function AppTab() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Pay') {
                        iconName = focused ? 'wallet' : 'wallet-outline';
                    } else if (route.name === 'GetPaid') {
                        iconName = focused ? 'cash' : 'cash-outline';
                    } else if (route.name === 'History') {
                        iconName = focused ? 'time' : 'time-outline';
                    } else if (route.name === 'MyLinks') {
                        iconName = focused ? 'link' : 'link-outline';
                    } else if (route.name === 'Transactions') {
                        iconName = focused ? 'list' : 'list-outline';
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'purple',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Pay" component={PayOrBuyScreen} options={{ headerShown: false }}/>
            <Tab.Screen name="GetPaid" component={GetPaidScreen} options={{ headerShown: false }}/>
            <Tab.Screen name="History" component={HistoryScreen} options={{ headerShown: false }}/>
            <Tab.Screen name="MyLinks" component={MyLinksScreen} options={{ headerShown: false }}/>
            <Tab.Screen name="Transactions" component={TransactionsScreen} options={{ headerShown: false }}/>
        </Tab.Navigator>
    );
}
