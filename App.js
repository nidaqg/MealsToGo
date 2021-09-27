import React from "react";
import { Text } from "react-native";
import { RestaurantScreen } from "./src/features/restaurants/screens/RestaurantScreen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/Infrastructure/Theme";
//import navigation
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//import SafeArea component
import {SafeArea} from "./src/features/restaurants/components/SafeArea";
//importing fonts from expo-google-fonts.
//Each font has to be imported separately
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
//import icons from expo for tab
import {Ionicons} from "@expo/vector-icons";


const Tab = createBottomTabNavigator();

//for tab navigation
const Settings = () => (
  <SafeArea style={{ flex: 1 }}>
    <Text>Settings</Text>
  </SafeArea>
);
const Map = () => (
  <SafeArea style={{ flex: 1 }}>
    <Text>Maps</Text>
  </SafeArea>
);
const Restaurants = () => <RestaurantScreen />;

//import theme provider from styled components npm package and wrap everything in it
//this will help us keep the theme consistent throughout the app
export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;
              if (route.name === 'Restaurants') {
                iconName = 'fast-food-outline';
              } else if (route.name === 'Settings') {
                iconName = 'settings-outline';
              } else if (route.name === 'Map') {
                iconName = 'map-outline';
              } 
  
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}
          >
            <Tab.Screen name="Restaurants" component={Restaurants} />
            <Tab.Screen name="Settings" component={Settings} />
            <Tab.Screen name="Map" component={Map} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
