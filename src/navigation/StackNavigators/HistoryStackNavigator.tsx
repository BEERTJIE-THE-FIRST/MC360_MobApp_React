import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";

const Stack = createNativeStackNavigator();

const HistoryStackNavigator = () => {
  const navigation: any = useNavigation();

  return (
    <></>
    // <Stack.Navigator>
    //   <Stack.Screen
    //     name="MoneyIn"
    //     component={MoneyInScreen}
    //     options={{
    //       headerShown: false,
    //     }}
    //   />
    // </Stack.Navigator>
  );
};

export default HistoryStackNavigator;
