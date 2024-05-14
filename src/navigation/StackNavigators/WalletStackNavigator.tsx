import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MoneyInScreen from "../../screens/walletScreens/MoneyInScreen";
import { Pressable, Text, TouchableOpacity, View, Image } from "react-native";

const Stack = createNativeStackNavigator();

const WalletNavigator = () => {
  const navigation: any = useNavigation();

  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: "#2F3E6B" },
        headerRight: () => (
          <Pressable onPress={() => alert("Menu button pressed!")}>
            <Text style={{ color: "#fff", fontSize: 13, marginRight: 10 }}>
              Current Balance: R1000.25
            </Text>
          </Pressable>
        ),
        headerLeft: () => (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 10,
              gap: 5,
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.toggleDrawer()}
              style={{ marginLeft: 10 }}
            >
              <Text style={{ color: "#fff", fontSize: 30 }}>☰</Text>
            </TouchableOpacity>
            <Image
              source={require("../../../assets/Micash360.png")}
              style={{ width: 76, height: 17, marginLeft: 10 }}
            />
          </View>
        ),
      })}
    >
      <Stack.Screen
        name="MoneyIn"
        component={MoneyInScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default WalletNavigator;
