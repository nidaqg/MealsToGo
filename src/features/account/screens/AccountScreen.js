import React from "react";
import { View } from "react-native";
import {
  AccountContainer,
  AccountCover,
  Background,
  MainContainer,
  Title,
  AnimationWrapper,
} from "../components/Background";
import { colors } from "../../../Infrastructure/Theme/colors";
import { Button } from "react-native-paper";
//animation
import LottieView from "lottie-react-native";

export const AccountScreen = ({ navigation }) => {
  return (
    <Background
      resizeMode="cover"
      source={require("../../../../assets/background.jpg")}
    >
      <AccountCover />

      <AnimationWrapper>
        <LottieView
          key="animation"
          autoPlay
          loop
          resizeMode="cover"
          source={require("../../../../assets/watermelon.json")}
        />
      </AnimationWrapper>

      <MainContainer>
        <View style={{ alignItems: "center" }}>
          <Title>Meals To Go</Title>
        </View>

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
      </MainContainer>
    </Background>
  );
};
