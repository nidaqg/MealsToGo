import React, { useContext, useState } from "react";
import { AuthContext } from "../../../services/authentication/AuthenticationContext";
import { SafeArea } from "../../restaurants/components/SafeArea";
import { Avatar, List } from "react-native-paper";
import { useFocusEffect } from "@react-navigation/native";
import { Text, View, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const SettingsScreen = ({ navigation }) => {
  const { onLogOut, user } = useContext(AuthContext);
  const [photo, setPhoto] = useState(null);

  //function for retrieving photo from async storage
  const getProfilePic = async (currentUser) => {
    const photoUri = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
    setPhoto(photoUri);
  };
  
  //use focusEffect hook to run function every time the screen is in focus
  useFocusEffect(
    React.useCallback(() => {
    getProfilePic(user);
  },[user]));


  return (
    <SafeArea>
      <View style={{ alignItems: "center", paddingTop: 16 }}>
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
          {!photo && (
            <Avatar.Icon size={180} icon="camera" backgroundColor="#2182BD" />
          )}
          {photo && (
            <Avatar.Image
              size={180}
              source={{ uri: photo }}
              backgroundColor="#2182BD"
            />
          )}
        </TouchableOpacity>
        <Text style={{ paddingTop: 16 }}>{user.email}</Text>
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
          left={(props) => <List.Icon {...props} color="black" icon="logout" />}
          onPress={() => onLogOut()}
        />
      </List.Section>
    </SafeArea>
  );
};
