import React, {useContext} from "react";
import { AuthContext } from "../../../services/authentication/AuthenticationContext";
import { SafeArea } from "../../restaurants/components/SafeArea";
import { List } from "react-native-paper";

export const SettingsScreen = ({navigation}) => {
    const {onLogOut} = useContext(AuthContext);

  return (
    <SafeArea style={{ flex: 1 }}>
        <List.Section>
            <List.Item
            style={{padding:16}}
            title= "Favourites"
            left={(props)=> <List.Icon {...props} color="black" icon="heart"/>}
            onPress={()=> navigation.navigate("Favourites")}
            />

            <List.Item
            style={{padding:16}}
            title="Log out"
            left={(props) => <List.Icon {...props} color="black" icon="door"/>}
            onPress={()=> onLogOut()}
            />
      
      </List.Section>
    </SafeArea>
  );
}