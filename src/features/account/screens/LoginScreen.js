import React, { useState, useContext, useEffect } from "react";
import {
  Background,
  ErrorContainer,
  LoginContainer,
} from "../components/Background";
import { colors } from "../../../Infrastructure/Theme/colors";
import { Button, TextInput } from "react-native-paper";
import { View, Text } from "react-native";
import { AuthContext } from "../../../services/authentication/AuthenticationContext";
import { ActivityIndicator, Colors } from "react-native-paper";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { onLogin, error, isLoading } = useContext(AuthContext);

  return (
    <Background
      resizeMode="cover"
      source={require("../../../../assets/background.jpg")}
    >
      <LoginContainer>
        <View>
          <TextInput
            style={{ marginBottom: 10, width: 300 }}
            label="Email"
            textContentType="emailAddress"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={(u) => setEmail(u)}
          />
        </View>

        <TextInput
          style={{ width: 300 }}
          label="Password"
          textContentType="password"
          autoCapitalize="none"
          secureTextEntry
          value={password}
          onChangeText={(p) => setPassword(p)}
        />

        {error !== "" && (
          <ErrorContainer>
            <Text style={{ color: "red" }}>{error}</Text>
          </ErrorContainer>
        )}

        {!isLoading ? (
          <>
            <View style={{ marginTop: 15 }}>
              <Button
                style={{ padding: 10 }}
                mode="contained"
                color={colors.brand.primary}
                icon="lock-open-outline"
                onPress={() => onLogin(email, password)}
              >
                LOGIN
              </Button>
            </View>

            <View style={{ marginTop: 10 }}>
              <Button
                style={{ padding: 10 }}
                mode="contained"
                color={colors.brand.primary}
                icon="arrow-left"
                onPress={() => navigation.goBack()}
              >
                Back
              </Button>
            </View>
          </>
        ) : (
          <View style={{ marginTop: 15 }}>
            <ActivityIndicator animating={true} color={Colors.blue300} />
          </View>
        )}
      </LoginContainer>
    </Background>
  );
};
