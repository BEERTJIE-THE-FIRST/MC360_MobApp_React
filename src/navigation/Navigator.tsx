import { NavigationContainer } from "@react-navigation/native";
import { useState, useEffect } from "react";
import AuthNavigator from "./AuthNavigator";
import AppNavigator from "./AppNavigator";

const AppRoute = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(true);
  }, []);

  return (
    <NavigationContainer>
      {isLoggedIn ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppRoute;
