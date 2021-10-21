import React, {useState, useContext} from "react";
import { Background, LoginContainer } from "../components/Background";
import { colors } from "../../../Infrastructure/Theme/colors";
import { Button, TextInput } from "react-native-paper";
import { View, Text } from "react-native";
import { AuthContext } from "../../../services/authentication/AuthenticationContext";


export const RegisterScreen = () => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [repeatedpassword, setRepeatedPassword] = useState("");

const {onRegister, error} = useContext(AuthContext)


  return (
    <Background
    resizeMode= 'cover'
    source={require("../../../../assets/background.jpg")}>
      <LoginContainer>
      <View>
        <TextInput
        style={{marginBottom:10}}
          label="Email"
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={(u) => setEmail(u)}
        />
        </View>
        <TextInput
          style={{marginBottom:10}}
          label="Password"
          textContentType="password"
          autoCapitalize="none"
          secureTextEntry
          value={password}
          onChangeText={(p) => setPassword(p)}
        />
        <TextInput
          label=" Re-enter Password"
          textContentType="password"
          autoCapitalize="none"
          secureTextEntry
          value={repeatedpassword}
          onChangeText={(p) => setRepeatedPassword(p)}
        />
        
        
        {error && (
        <View style={{marginTop:15}}>
       <Text>ERROR</Text>
        </View>)}

        <View style={{ marginTop: 15 }}>
          <Button
            style={{ paddingHorizontal: 50, paddingVertical:10 }}
            mode="contained"
            color={colors.brand.primary}
            icon="email"
            onPress={() => onRegister(email,password, repeatedpassword)}
          >
            Register
          </Button>
        </View>


      </LoginContainer>
    </Background>
  );
};
