import React from "react";
import { View } from "react-native";
import { AccountContainer, Background } from "../components/Background";
import { colors } from "../../../Infrastructure/Theme/colors";
import { Button } from "react-native-paper";

export const AccountScreen = ({ navigation }) => {
  return (
    <Background
      resizeMode="cover"
      source={require("../../../../assets/background.jpg")}
    >
      <AccountContainer>
        <View style={{ marginBottom: 15 }}>
          <Button
            style={{ padding: 10 }}
            mode="contained"
            color={colors.brand.primary}
            icon="lock-open-outline"
            onPress={() => navigation.navigate("Login")}
          >
            LOGIN
          </Button>
        </View>

        <View>
          <Button
            style={{ padding: 10 }}
            mode="contained"
            color={colors.brand.primary}
            icon="account"
            onPress={() => navigation.navigate("Register")}
          >
            REGISTER
          </Button>
        </View>
      </AccountContainer>
    </Background>
  );
};
