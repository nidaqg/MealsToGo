import React, { useContext } from "react";
import { AuthContext } from "../../../services/authentication/AuthenticationContext";
import { SafeArea } from "../../restaurants/components/SafeArea";
import { Avatar, List } from "react-native-paper";
import { Text, View } from "react-native";
export const SettingsScreen = ({ navigation }) => {
  const { onLogOut, user } = useContext(AuthContext);

  return (
    <SafeArea>

        <View style={{alignItems:'center', paddingTop:16}}>
      <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />
      <Text style={{paddingTop:16}}>{user.email}</Text>
      </View>

      <List.Section>
        <List.Item
          style={{ padding: 16 }}
          title="Favourites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate("Favourites")}
        />

        <List.Item
          style={{ padding: 16 }}
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={() => onLogOut()}
        />
      </List.Section>
    </SafeArea>
  );
};
