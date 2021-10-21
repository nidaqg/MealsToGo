import React, { useContext } from "react";
import { AppNavigation } from "./AppNavigation";
import { AuthContext } from "../../services/authentication/AuthenticationContext";
import { NavigationContainer } from "@react-navigation/native";
import { AccountNavigator } from "./AccountNavigator";

export const Navigation = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {isAuthenticated ? (
        <AppNavigation />
      ) : (
          <AccountNavigator/>
      )}
    </NavigationContainer>
  );
};
